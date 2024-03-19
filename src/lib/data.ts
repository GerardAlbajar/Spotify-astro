import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Circles",
    color: colors.yellow,
    cover:
      "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
  {
    id: '2',
    albumId: 2,
    title: "Swimming",
    color: colors.green,
    cover:
      "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
  {
    id: '3',
    albumId: 3,
    title: "The Divine Feminine",
    color: colors.rose,
    cover:
      "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
  {
    id: '4',
    albumId: 4,
    title: "GO:OD AM",
    color: colors.blue,
    cover:
      "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
  {
    id: '5',
    albumId: 5,
    title: "Faces",
    color: colors.purple,
    cover:
      "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
  {
    id: '6',
    albumId: 6,
    title: "The Spins",
    color: colors.orange,
    cover:
      "https://img6.bdbphotos.com/images/orig/3/q/3qzzmo7j8igi7o8z.jpg?skj2io4l",
    artists: ["Mac Miller"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "Circles",
    "image": "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Circles",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Complicated",
    "image": "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Circles",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Blue World",
    "image": "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Circles",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Good News",
    "image": "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Circles",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "I Can See",
    "image": "https://img5.bdbphotos.com/images/orig/k/k/kkpr81ekki8skk88.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Circles",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Come Back to Earth",
    "image": "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Swimming",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Hurt Feelings",
    "image": "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Swimming",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "What's the Use",
    "image": "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Swimming",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "Perfecto",
    "image": "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Swimming",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Self Care",
    "image": "https://img5.bdbphotos.com/images/orig/w/s/ws181y6yf28my1ys.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Swimming",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Congratulations (feat. Bilal)",
    "image": "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    "artists": ["Mac Miller", "Bilal"],
    "album": "The Divine Feminine",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Dang (feat. Anderson .Paak)",
    "image": "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    "artists": ["Mac Miller", "Anderson .Paak"],
    "album": "The Divine Feminine",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Stay",
    "image": "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "The Divine Feminine",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "Skin",
    "image": "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "The Divine Feminine",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "Cinderella (feat. Ty Dolla Sing)",
    "image": "https://img2.bdbphotos.com/images/orig/u/k/ukylkyzkubenklzu.jpg?skj2io4l",
    "artists": ["Mac Miller", "Ty Dolla Sing"],
    "album": "The Divine Feminine",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Doors",
    "image": "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "GO:OD AM",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Brand Name",
    "image": "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "GO:OD AM",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Rush Hour",
    "image": "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "GO:OD AM",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "Two Matches (feat. Ab-Soul)",
    "image": "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    "artists": ["Mac Miller", "Ab-Soul"],
    "album": "GO:OD AM",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "100 Grandkids",
    "image": "https://img1.bdbphotos.com/images/orig/s/o/soxhnhsvgfwdoshf.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "GO:OD AM",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Inside Outside",
    "image": "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Faces",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Here We Go",
    "image": "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Faces",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Friends (feat. ScHoolvoy Q)",
    "image": "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    "artists": ["Mac Miller", "ScHoolvoy Q"],
    "album": "Faces",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Angel Dust",
    "image": "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Faces",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Malibu",
    "image": "https://img2.bdbphotos.com/images/orig/9/o/9osczij99kb699bz.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "Faces",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 6,
    "title": "The Spins",
    "image": "https://img6.bdbphotos.com/images/orig/3/q/3qzzmo7j8igi7o8z.jpg?skj2io4l",
    "artists": ["Mac Miller"],
    "album": "The Spins",
    "duration": "4:20"
  },
]