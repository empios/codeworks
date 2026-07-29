export type ThemeMode = 'terminal' | 'paper';

export interface AuditFormData {
  name: string;
  contact: string;
  website: string;
  meetingLocation: 'client' | 'cafe' | 'online';
  message: string;
}
