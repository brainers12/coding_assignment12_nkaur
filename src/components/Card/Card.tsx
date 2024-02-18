import React from 'react';

export interface CardProps {
  title: string;
  body: string;
  actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, body, actions }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      {actions && <div className="card-actions">{actions}</div>}
    </div>
  );
};
