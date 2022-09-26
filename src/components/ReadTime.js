import React from "react";

function ReadTime({ minutes }) {
	const emoji = minutes < 30 ? "☕" : "🍱";
	const count = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);

	return <span>{emoji.repeat(count) + minutes + "min read "}</span>;
}

export default ReadTime;
