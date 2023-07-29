export type UserImageDataType = {
    _id: string;
    user: string;
    userImageName: string;
    userImagePath: string;
    userImageAlt?: string | null;
    isMain?: boolean;
    ref?: string | null;
    creationDate: Date;
    createdBy: string;
    isDeleted: boolean;
    __v: number;
};
declare class UserImage {
    _id: string;
    user: string;
    userImageName: string;
    userImagePath: string;
    userImageAlt?: string | null;
    isMain?: boolean;
    ref?: string | null;
    creationDate: Date;
    createdBy: string;
    isDeleted: boolean;
    __v: number;
    constructor(props: UserImageDataType);
}
export default UserImage;
