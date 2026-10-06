import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "cn";

export interface AvatarProps extends BaseAvatar.Root.Props {}

export function Avatar(props: AvatarProps) {
  const { className, ...rest } = props;
  return (
    <BaseAvatar.Root
      className={cn(
        "size-10 grid place-items-center overflow-hidden rounded-full select-none border-2 border-gray-1000",
        className,
      )}
      data-slot="avatar"
      {...rest}
    />
  );
}

export interface AvatarImageProps extends BaseAvatar.Image.Props {}

export function AvatarImage(props: AvatarImageProps) {
  const { className, ...rest } = props;
  return (
    <BaseAvatar.Image
      className={cn("size-full object-cover", className)}
      data-slot="avatar-image"
      {...rest}
    />
  );
}

export interface AvatarFallBackProps extends BaseAvatar.Fallback.Props {}

export function AvatarFallBack(props: AvatarFallBackProps) {
  const { className, ...rest } = props;
  return (
    <BaseAvatar.Fallback
      className={cn("grid size-full place-items-center text-sm", className)}
      delay={600}
      data-slot="avatar-fallback"
      {...rest}
    />
  );
}
