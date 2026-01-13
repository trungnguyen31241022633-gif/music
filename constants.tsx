
import { Video } from './types';

export const LOGIN_CREDENTIALS = {
  username: 'hieudo',
  password: 'dauavdv'
};

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: '5 Ngón Tay',
    thumbnail: 'https://picsum.photos/seed/fingers/640/360',
    channel: 'Hiếu Studio',
    views: '1.2M views',
    postedAt: '2 days ago',
    duration: '03:45',
    type: 'internal',
    actionValue: 'dở vl'
  },
  {
    id: '2',
    title: 'Tình yêu mùa đông',
    thumbnail: 'https://picsum.photos/seed/winter/640/360',
    channel: 'Hiếu Records',
    views: '850K views',
    postedAt: '1 week ago',
    duration: '04:12',
    type: 'external',
    actionValue: 'https://drive.google.com/file/d/1acQGgrKsfa-Fr8KkRDZ8W4KIVwkwrHgc/view'
  }
];
