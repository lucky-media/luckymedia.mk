import Head from "next/head";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Navigation from "./Navigation";
import useSticky from "../../hooks/useSticky";

export default function Layout({ children, title = "Lucky Media", background }) {
    const { isSticky, element } = useSticky();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/images/favicons/fav-32.ico" sizes="32x32"/>
                <link rel="icon" href="/images/favicons/fav-57.ico" sizes="57x57"/>
                <link rel="icon" href="/images/favicons/fav-76.ico" sizes="76x76"/>
                <link rel="icon" href="/images/favicons/fav-96.ico" sizes="96x96"/>
                <link rel="icon" href="/images/favicons/fav-128.ico" sizes="128x128"/>
                <link rel="icon" href="/images/favicons/fav-192.ico" sizes="192x192"/>
                <link rel="icon" href="/images/favicons/fav-228.ico" sizes="228x228"/>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <main className="antialiased font-sans">
                <Navigation ref={element} sticky={isSticky} background={background} />
                {children}
            </main>

            <footer>
                <Footer/>
                <Copyright/>
            </footer>
        </div>
    );
};
