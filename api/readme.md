# MinAPI
Minimun API is listed here

## Chats API
+ chat.ban(chat: IChat, user: IProfile) - ban __user__ in __chat__
+ chat.invite(chat: IChat, user: IProfile) - send an invatation for __user__ to join the __chat__
+ chat.kick(chat: IChat, user: IProfile) - kick __user__ from __chat__
+ chat.update.name(chat: IChat, name: String) - set new __chat__ __name__
+ chat.update.picture(chat: IChat, pictureURL: String) - set new picture (__pictureURL__) in __chat__
+ chat.write(chat: IChat, message: Map) - send __message__ in __chat__

## Albums API
+ audio.album.create(name: String) - create album named __name__
+ audio.album.delete(album: Album) - delete __album__
+ audio.album.set.name(album: Album, name: String) - set __album__ name to __name__
+ audio.album.set.picture(album: Album, pictureURL: String) set __album__ picture to __pictureURL__ 

## Picture API
+ picture.upload(album: Album?) - upload picture to server
+ picture.moreload(album: Album?) - upload pictures to server

## User API

### Folders
+ user.folder.create(name: String) - create folder named __name__ for __user__
+ user.folder.move(folder: Folder, dest: Folder) - move __folder__ to __dest__ in __user__ profile
+ user.folder.move.chat(chat: IChat, dest: Folder) - move __chat__ to __dest__ in __user__ profile
+ user.folder.set.name(folder: Folder, name: String) - set new __name__ for __folder__ in __user__ profile
+ user.folder.set.picture(pictureURL: String) - sets new __user__'s avatar by __pictureURL__

### Info
+ user.get(user: IProfile, fields: Array?) - gets user data (__fields__)
+ user.set(user: IProfile, fields: Map) - sets __user__ data (__fields__)
+ user.set.name(user: IProfile, name: String) - sets __user__ __name__
+ user.set.picture(user: IProfile, pictureURL: String) - sets __user__'s avatar by __pictureURL__

### Chats
+ user.join.chat(user: IProfile, chat: IChat) - __user__ joins the __chat__
+ user.new.channel(user: IProfile, name: String) - __user__ creates his own channel named __name__
+ user.new.chat.private(other: IProfile) - __user__ starts private chat with any __other__ user
+ user.new.chat.public(name: String) - __user__ creates public chat named __name__

# MidAPI
Middle API is listed here

## Files
+ file.folder.cp(file: File, dest: Directory) - copy __file__ to __dest__ directory
+ file.folder.make(name: String, location: Directory) - make directory named __name__ in __location__
+ file.folder.mv(file: File, dest: Directory) - move __file__ to __dest__
+ file.folder.rename(file: File, name: String) - rename __file__ to __name__
+ file.folder.rm(file: File) - remove __file__
+ file.upload(location: Directory) - updload file to __location__

## Audio
+ audio.upload(album: Album?) - upload an audio file

# MaxAPI
Maximum API is listed here

## Developers

### Code
+ developer.code.delete(code: Code) - deletes __code__
+ developer.code.update(old: Code, new: Code) - updates __old__ code
+ developer.code.upload(code: Code) - uploads your __code__

### Organizations
+ developer.organizations.get(user: Developer) - get all __user__'s organizations
+ developer.organizations.set(orgs: String[]) - set all your organizations to __orgs__

### Project
+ developer.project.create(name: String) - creates new project named __name__
+ developer.project.delete(project: Project) - deletes __project__
+ developer.project.set(project: Project, data: Map) - set __project__ info
+ developer.project.get(project: Project, data: Map) - get __project__ info
+ developer.project.set.name(project: Project, name: String) - set __project__ name to __name__
+ developer.project.set.picture(project: Project, pictureURL: String) - set __project__ picture to __pictureURL__
+ developer.project.set.techstack(project: Project, techstack: String[]) - set __project__'s tech stack to __techstack__

### Statistics
+ developer.statistics.get(user: Developer) - get __user__'s statistics
