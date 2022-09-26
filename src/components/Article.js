import React from "react";
import ReadTime from "./ReadTime";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
	return (
		<article>
			<h3>{title}</h3>
			<small>
				{date}.{<ReadTime minutes={minutes} />}
			</small>
			<p>{preview}</p>
		</article>
	);
}

export default Article;
