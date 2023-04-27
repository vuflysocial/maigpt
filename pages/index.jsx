import React, { useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkBalance";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Tv from "./tv";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;

const MenuButton = styled.button`
  background-color: #333;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const IFrameWrapper = styled.div`
  background-color: #fff;
  display: ${props => props.isOpen ? 'block' : 'none'};
  flex: 1;

  @media (min-width: 768px) {
    display: block;
  }
`;

const IFrame = styled.iframe`
  border: none;
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

const iframeStyles = `
  #gotem-iframe {
    overflow: hidden;
  }
`;

export default function Home() {
  const { logout } = useLogout();
  const { isLoggedIn, isLoading } = useUser();
  const router = useRouter();


  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return (
    <div className={styles.container} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1 className={styles.h1}>Restricted Access Page</h1>
      <p className={styles.explain}>
        Thanks for being a member of our NFT community!
      </p>

      <button className={styles.mainButton} onClick={logout}>
        Logout
      </button>
      <br />
      <br />
      <br />
      <div style={{ flex: 1 }}>
        <iframe src="https://gotem.netlify.app/" width="500" height="500" style={{ border: "none" }}></iframe>
      </div>
      <div style={{ flex: 1 }}>

      </div>
      <Tv />
    </div>

  );
}


// This gets called on every request
export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY = process.env.THIRDWEB_AUTH_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    "binance-testnet"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}

