import React from "react";
import Link from "next/link";
import Router from "next/router";

const errorPage = () => (
    <div>
        <h1>Nothing to see here.</h1>
        <p>Try <Link href="/"><a>To Go Home</a></Link></p>
        <button onClick={() => Router.push("/")}>Go Home</button>
    </div>
);

export default errorPage;