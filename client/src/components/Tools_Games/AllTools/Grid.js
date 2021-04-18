import React, { useState } from "react";

import { ParentDiv, ChildDiv, UlGrid, LiGrid, InputGrid } from "./syles";

export const Squares = (props) => {
    const [count, setCount] = useState(3);
    const grid = [];

    const setGrid = () => {
        for (let i = 0; i < count; i++) {
            grid.push([]);
            for (let a = 0; a < count; a++) {
                grid[i].push("");
            }
        }
        console.log(grid);
    };

    setGrid();

    const customGrid = (e) => {
        console.log(e.target.value);
        setCount(e.target.value);
    };

    const upperCaseFN = (e) => {
        const letter = e.target.value;

        return letter.toUpperCase();
    };

    return (
        <ParentDiv>
            <ChildDiv>
                <div>
                    {count}x{count}
                </div>
                <input
                    type="range"
                    defaultValue="3"
                    min="3"
                    max="10"
                    onChange={(e) => customGrid(e)}
                />
                {grid.map((arr, a) => {
                    return (
                        <UlGrid key={a}>
                            {arr.map((e, i) => {
                                return (
                                    <LiGrid key={i}>
                                        <InputGrid
                                            onKeyUp={(e) => (e.target.value = upperCaseFN(e))}
                                        />
                                    </LiGrid>
                                );
                            })}
                        </UlGrid>
                    );
                })}
            </ChildDiv>
        </ParentDiv>
    );
};
