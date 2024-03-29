import { ReactElement } from 'react';

// ==============================|| AUTH TYPES  ||============================== //

export type GuardProps = {
  children: ReactElement | null;
};

export type UserProfile = {
  username?: string;
  email?: string;
  avatar?: string;
  gender?: string;
  number?: number;
  status?: boolean;
  verified?: boolean;
};

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
  payload?: AuthProps;
}

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
}

export interface JWTDataProps {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, gender: string, email: string, team_id: string, password: string, sound: boolean) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};
