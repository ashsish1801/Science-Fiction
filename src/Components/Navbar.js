import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="banner">
                <img
                    loading="lazy"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAmCAYAAAA1MOAmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARBSURBVHgBtVbNi1xFEK/q2Y/sRs0E1BgQfOtpN6dVFAKCzhI8CILrXXBy8yAkf4AwqzdPq6B4yGF2QEguGvQiKuvm5E2TW3LKbE5DshNIQiAfM68r1dXV3e/NTnYfy2zBzPvq7l/9qn5V3QiHbIt/9DKcnW4j2Y6BQ7RTWzut2uzMVb79wD1PwSHY4t87DTTYBguZBQJA9zdhsOxytz7/0ovrfNu04AEQ3Q3CRMGWtu6eQ4IWAdXd0igAxMZ4/mEyYEubd9fB0nly4eLFPSX9iMiA1hGEyQiE8uP+KiwEgEl5OCJBtmRoImCEhkQEwqL4Qf4F1KDFyUrfs0msHE30UZ0YM/Q5QV0YR8DFKjH76Kvbq/uNIdDUyOIU2fir3hpDz1Xj6vleltdq7QFCo+TtOHM5C7AqDhEKZzPkMM/HSH91tVufqb9wbviE1vJ5qGYcRjBGWkWsYFC24gxwviyWwD77uNegWWYDNvNzkCrCuZGlwZb5xTxq7gTsi9O9bHgU20PExiC4gzId9wlgIjfyhIChziRxUtRfLt9uoan9zx8bVJpEFWEgOZceCg1EgovW5YzDueYqUUMtLmlE0IWCKlDzM1n+LO5Q1QG5WOQGJFZSiXEezxHXeJtwDu+PZgyUBOsmFaqtAEYSXlS+oK1618g9zYaJOslGyYdVTU2ZkedFEj70CqLA9UAWUoIxC65dTbkoagARgcrjRY1V5G/GIxJFXMNrySgsSCcAxxzw5cy3/c9hT7N61Q7iGUneSBf0jRhDXnzgEjD4PLo6Qdp4/4d+9/RPvWwshdCuQgHLD3A0D8aOpMbLXuFd5jSMfJfBkemb717st5cvl0GtHTNZ3VdIeWdEiAZT9WHMXig9X6EoXdVlsUm1mX9O/XWnOYZiUfLRAffFWN1igvIIYESDgZU+YPCWFnh6e2mz35VDKO9VI4sro9i0wHKjNuzKhi4avaLYSWKxlKqGgsoQ3sCZ6a6h2ica96ReglILk83zx/9OnLX54G0O0K3YuENrS4WeWEuoMLFAt0/Tsfgm7GVBXCEwuRbIhX9fv9b+87UFwvwbX9DhgEkBTRcAVWch0OCVl6iDlhdh4ZUPIxTs519PrlGev8nDf4sloeKI8fBH3NRoIdVVcS0fxnT4GXsGuXTp5PYvF058ym40efB2ymAsAShWERbrSsMRnSu82/N09fv6qx1r8xVeukOqn9AdYiYLvQ8gNQEY3ZZItHd//+2DrbG+0xjM8U4+R9nTeSQ+m+DwiFRdOg5gakA+guAbArHwLJ298eErVyqBBXuns7Nm56E1OIo0nPVkit9TLxRB37PWfv946uF32ysL93YNrmLLF/mId2y6zWCNXR+VHf+uwFytef2947fKnw9oi5v9JueoxVQy/8bp3WxTbiVk4+Yc+Ph948zLG4RPV3hX7jgksvD1I3zw1vOAJmbZVrdeZdwzyR0fnM7lZCkAAAAASUVORK5CYII="
                    alt="logo"
                    className="shrink-0 my-auto w-10 aspect-square mr-4"
                />
                <span className="logo text-xl tracking-tight font-normal text-white">
                    BrainyLingo
                </span>
            </div>
            <div className="nav">
                <div className="Home">
                    <button duration="500">Home</button>
                </div>
                <div className="Home">
                    <button duration="500">Leaderboard</button>
                </div>
                <div className="Home">
                    <button duration="500">Daily Quiz</button>
                </div>
                <div className="Home">
                    <button duration="500">Genre</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
