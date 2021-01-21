import React from "react";
import Link from "next/link";
import Router from "next/router";

import User from "../../components/user"

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Page of {props.appName}</h1>
        <User name="Morten" age={30}/>
        <p>Go to <Link href="/"><a>Home</a></Link></p>
        <button onClick={() => Router.push("/")}>Go Home</button>
    </div>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "My App (Auth)"});
        }, 1000);
    });

    return promise;
};

export default authIndexPage;