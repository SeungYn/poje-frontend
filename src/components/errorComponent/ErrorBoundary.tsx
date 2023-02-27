import  { Component, PropsWithChildren, ReactNode } from 'react';

interface Props{
	children: ReactNode;
	onError?: (error: Error) => void;
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

	componentDidCatch(error: Error) {
		console.log(error);
		alert(error);
		this.props.onError?.(error);
	}


	render() {
		return this.props.children;
	}
}

export default ErrorBoundary;