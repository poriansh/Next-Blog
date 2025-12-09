import Avatar from "./Avater";

function Author({avatarUrl, name}) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} />
      <span className="text-sm text-appsecondary-500">{name}</span>
    </div>
  );
}
export default Author;
