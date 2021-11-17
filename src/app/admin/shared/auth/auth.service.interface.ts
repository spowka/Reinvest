export interface AuthServiceInterface {
  login(username: string, password: string): void;
  logout(): void;
  getToken(): string;
  isAuthenticated(): boolean;
}
