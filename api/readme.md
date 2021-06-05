# API
Minimun API is listed here

## Chats API
+ chat.ban(chat: IChat, user: IProfile) - ban __user__ in __chat__
+ chat.invite(chat: IChat, user: IProfile) - send an invatation for __user__ to join the __chat__
+ chat.kick(chat: IChat, user: IProfile) - kick __user__ from __chat__
+ chat.update.name(chat: IChat, name: String) - set new __chat__ __name__
+ chat.update.picture(chat: IChat, pictureURL: String) - set new picture (__pictureURL__) in __chat__
+ chat.write(chat: IChat, message: Map) - send __message__ in __chat__

## Picture API
+ picture.upload(album: Album?) - upload picture to server
+ picture.moreload(album: Album?) - upload pictures to server

## User API
### Folders
+ user.folder.create(user: IProfile, name: String) - create folder named __name__ for __user__
+ user.folder.move(user: IProfile, folder: Folder, dest: Folder) - move __folder__ to __dest__ in __user__ profile
+ user.folder.move.chat(user: IProfile, chat: IChat, dest: Folder) - move __chat__ to __dest__ in __user__ profile
+ user.folder.set.name(user: IProfile, folder: Folder, name: String) - set new __name__ for __folder__ in __user__ profile
+ user.folder.set.picture(user: IProfile, pictureURL: String) - sets new __user__'s avatar by __pictureURL__
### Info
+ user.get(user: IProfile, fields: Array?) - gets user data (__fields__)
+ user.set(user: IProfile, fields: Map) - sets __user__ data (__fields__)
+ user.set.name(user: IProfile, name: String) - sets __user__ __name__
+ user.set.picture(user: IProfile, pictureURL: String) - sets __user__'s avatar by __pictureURL__
### Chats
+ user.join.chat(user: IProfile, chat: IChat) - __user__ joins the __chat__
+ user.new.channel(user: IProfile, name: String) - __user__ creates his own channel named __name__
+ user.new.chat.private(user: IProfile, other: IProfile) - __user__ starts private chat with any __other__ user
+ user.new.chat.public(user: IProfile, name: String) - __user__ creates public chat named __name__
