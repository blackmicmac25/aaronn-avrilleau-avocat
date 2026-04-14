
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to support React.ReactNode type definition
  icon: React.ReactNode;
}

export enum Section {
  HERO = 'hero',
  EXPERTISE = 'expertise',
  SERVICES = 'services',
  CONTACT = 'contact'
}
