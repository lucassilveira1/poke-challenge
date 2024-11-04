import { FC } from "react";

interface StatBarProps {
    pokeStat: number;
    maxStat: number;
}

export const StatBar: FC<StatBarProps> = (props: StatBarProps) => {
    const filledWidth = Math.min(props.pokeStat / props.maxStat) * 100;

    return (
        <div
            style={{
                width: "100px",
                height: "10px",
                backgroundColor: "#000",
            }}
        >
            <div
                style={{
                    width: `${filledWidth}%`,
                    height: "100%",
                    backgroundColor: "#d4c68d",
                }}
            ></div>
        </div>
    );
};
