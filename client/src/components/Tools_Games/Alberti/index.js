import React, { useState } from "react";

import {
    ParentDiv,
    ChildDiv,
    UlStatic,
    LiStatic_A,
    LiStatic_B,
    LiDynamic_A,
    LiDynamic_B,
    UlDinamic
} from "./style";

const abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

export const AlbertiTool = (props) => {
    return (
        <ParentDiv>
            <ChildDiv>
                <div>Cifrado de Alberti</div>
                <UlStatic>
                    {abc.map((l, i) => {
                        return i % 2 == 0 ? (
                            <LiStatic_A key={i}>{l}</LiStatic_A>
                        ) : (
                                <LiStatic_B key={i}>{l}</LiStatic_B>
                            );
                    })}
                </UlStatic>
                <UlDinamic>
                    {abc.map((l, i) => {
                        return i % 2 == 0 ? (
                            <LiDynamic_A key={i}>{l}</LiDynamic_A>
                        ) : (
                                <LiDynamic_B key={i}>{l}</LiDynamic_B>
                            );
                    })}

                    {abc.map((l, i) => {
                        return i % 2 == 0 ? (
                            <LiDynamic_B key={i}>{l}</LiDynamic_B>
                        ) : (
                                <LiDynamic_A key={i}>{l}</LiDynamic_A>
                            );
                    })}
                    {abc.map((l, i) => {
                        return i % 2 == 0 ? (
                            <LiDynamic_A key={i}>{l}</LiDynamic_A>
                        ) : (
                                <LiDynamic_B key={i}>{l}</LiDynamic_B>
                            );
                    })}
                </UlDinamic>
            </ChildDiv>
        </ParentDiv>
    );
};
