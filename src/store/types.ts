export interface TrackType {
    id: number;
    artistName: string;
    trackName: string;
    url: string;
    picture: string;
    pictureBlob?: Blob;
    minPicture: string;
    minPictureBlob?: Blob;
    album: string;
    time: number;
    artist: string;
    liveFullTime: number;
    liveCurrentTime: number;
}

export interface PicturePayloadType {
  trackId: number;
  picture: Blob;
}

export interface TracksType {
    [id: number]: TrackType;
}

export interface PictureCacheType {
    [url: string]: Blob;
}

export enum StatusType {
    INACTIVE,
    WAITING,
    PLAYING,
    PAUSED,
    NEXT,
    PREVIOUS,
}
