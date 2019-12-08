import React from 'react';

function Title(props) {

	function handleClick() {
		props.forwardClick();

	}

	return (
		<div>
			<div className="row title-row justify-content-center">
				<div className="col col-title">
					<div className={`underline page-title ${props.clickable ? "clickable" : ""}`}
						 {...(props.clickable && {onClick: handleClick.bind(this)})}>
						{props.titleText}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Title;
