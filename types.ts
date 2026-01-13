
export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  postedAt: string;
  duration: string;
  type: 'internal' | 'external';
  actionValue: string;
}

export interface User {
  username: string;
  isLoggedIn: boolean;
}
