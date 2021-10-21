import { Room } from "../../generated/schema"
import { CoinLeaguesFactory as CoinLeaguesFactoryTemplates } from "../../generated/templates"
import { RoomCreated } from "../../generated/RoomFactory/RoomFactory"
export function handleRoomCreated(event: RoomCreated): void {
  CoinLeaguesFactoryTemplates.create(event.params.room);
  let room = Room.load(event.params.room.toHexString());
  if(!room){
    room = new Room(event.params.room.toHexString());
    room.createdAt = event.block.timestamp;
    room.creator = event.params.creator;
    room.save();
  }
 
}
