import { ConnectWallet, useAddress, Web3Button } from "@thirdweb-dev/react";
import { isFeatureEnabled } from "@thirdweb-dev/sdk";
import Link from "next/link";
import { contractAddress } from "../const/yourDetails";
import styles from "../styles/Home.module.css";

export default function Login() {
  const address = useAddress(); // Get the user's address

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Auth -MAIGPT MJDCC NFT Gate</h1>
      <p className={styles.explain}>
        MAIGPT {" "}
        <b>
          <a
            href="https://portal.thirdweb.com/building-web3-apps/authenticating-users"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.purple}
          >
            Auth
          </a>
        </b>
        !
      </p>

      <p className={styles.explain}>
  You cannot access {" "}
  <Link href="/" passHref>
    <button className={styles.maigptButton}>
      MAIGPT
    </button>
  </Link>{" "}
  unless you own an MJDCC NFT from our collection!
        if you don&apos;t have one, you can&apos;t mint below
</p>


      <hr className={styles.divider} />

      <>
        {address ? (
          <p>
            Welcome, {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        ) : (
          <p>Please connect your wallet to continue.</p>
        )}

        <ConnectWallet accentColor="green" />
      </>
      <br/>
      <div>
      <iframe
    src="https://ipfs.thirdwebcdn.com/ipfs/QmfK9mw9eQKE9vCbtZht9kygpkNWffdwibsJPnCo7MBN4M/erc1155.html?contract=0x96617c4613A9ACcda14AcBaD49D1e1d663eFaB69&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Testnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance-testnet.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22tBNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnbt%22%2C%22chainId%22%3A97%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22binance-testnet%22%7D&tokenId=0"
    width="600px"
    height="600px"
    style={{ maxWidth: "100%" }}
    frameborder="0"
    ></iframe>
      </div>
    </div>

  );
}
