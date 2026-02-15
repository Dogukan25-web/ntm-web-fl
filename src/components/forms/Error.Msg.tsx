import React from 'react';

type Props = {
  error?: string;
};

function ErrorMsg({ error }: Props) {
  return error ? (
    <span className="font-theme text-xs text-red-500">{error}</span>
  ) : null;
}

ErrorMsg.defaultProps = {
  error: undefined,
};

export default ErrorMsg;
