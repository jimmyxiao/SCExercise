import { UserProfile } from "./UserProfile";
import { UserProfileDto } from "./UserProfileDto";

export class User implements UserProfile {
    data!: UserProfileDto;
    loginPlatform!: number;
    ip!: string;
    sessionId!: string;
    mask!: string;
    status!: number;
    securityKey!: string;
    adminInfo!: UserProfile;
    token!: string;
    userName!: string;
}
