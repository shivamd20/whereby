import type {MetaFunction} from "remix";

export let meta: MetaFunction = () => {
    return {
        title: "Remix Starter",
        description: "Welcome to remix!"
    };
};

export default function Index() {
    return (
        <div className="remix__page">
            <main>
                <h2>Welcome to Remix!</h2>
                <p>We're stoked that you're here. 🥳</p>
                <p>
                    Feel free to take a look around the code to see how Remix does things,
                    it might be a bit different than what you’re used to. When you're
                    ready to dive deeper, we've got plenty of resources to get you
                    up-and-running quickly.
                </p>
                <p>
                    Check out all the demos in this starter, and then just delete the{" "}
                    <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
                    folders when you're ready to turn this into your next project.
                </p>
            </main>
            <aside>
                <h2>Demos In This App</h2>
                <ul>

                </ul>
                <h2>Resources</h2>
                <ul>

                </ul>
            </aside>
        </div>
    );
}
