import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-96 flex items-center justify-center">
          <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Oups ! Quelque chose s&apos;est mal passé
            </h2>
            <p className="text-red-600 mb-4">
              Un micro frontend n&apos;a pas pu se charger correctement.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Réessayer
            </button>
            {this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-red-700 font-medium">
                  Détails de l&apos;erreur
                </summary>
                <pre className="mt-2 text-sm text-red-600 bg-red-100 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;