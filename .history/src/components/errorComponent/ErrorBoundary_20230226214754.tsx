import React, { Component, PropsWithChildren, ReactNode } from 'react';

interface Props{
	children: ReactNode;
}

interface State{
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error:undefined,
		}
	}



	render() {
		const { hasError, error } = this.state;
		return (
			<div>
				
			</div>
		);
	}
}

export default ErrorBoundary;