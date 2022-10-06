import { useRef, useState, useEffect, componentDidMount } from "react"
import { RiEmotionLine, RiSettings3Line, RiSendPlane2Line, RiSearchLine } from "react-icons/ri"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Image from "next/image"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import Twemoji from 'react-twemoji';

export default function Dashboard({ Component, pageProps }) {
  
  const chatName = 'The Nitrogen App';

  const messageBox = useRef(null);
  const chatBox = useRef(null);
  const messageContainer = useRef(null);

  const [sendable, setSendable] = useState(false);

  const [sampleChat, setSampleChat] = useState([]);

  const [message, setMessage] = useState('');
  const [atBottom, setAtBottom] = useState(true);
  const [stickToBottom, setStickToBottom] = useState(true);
  const [emojiPicker, setEmojiPicker] = useState(false);

  const ranges = [
    '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
    '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
    '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
    ' ', // Also allow spaces
  ].join('|');
  
  const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');
  const isOnlyEmojis = str => !removeEmoji(str).length;
  const lengthNoSpaces = str => str.replace(/\s/g, '').length;

  const users = new Map();
  users.set("342013001479749643", {id: 342013001479749643, name: 'AugieDog08', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("465613580096765973", {id: 465613580096765973, name: 'Paridax', profileUrl: 'https://cdn.discordapp.com/avatars/465613580096765973/460377a42559ec2d86c111f95f94c663.webp?size=32'});
  users.set("762765642830315530", {id: 762765642830315530, name: 'FatRatWithAHat', profileUrl: 'https://cdn.discordapp.com/avatars/762765642830315530/d97c52aa52dd654cb5019f9b72048094.webp?size=32'});
  users.set("457710227240779790", {id: 457710227240779790, name: 'Cloudyy', profileUrl: 'https://cdn.discordapp.com/avatars/457710227240779790/4375a48ba3b6302e454620dc2b133000.webp?size=32'});
  users.set("494249333986689035", {id: 494249333986689035, name: 'Countwinston', profileUrl: 'https://cdn.discordapp.com/avatars/494249333986689035/0d02459acd8fc96d8a7950a3d5fa0cde.webp?size=32'});
  users.set("11234", {id: 11234, name: 'BOT Carbon', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("12234", {id: 11235, name: 'BOT Nitrogen', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("11", {id: 11, name: 'nogel', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("12", {id: 12, name: 'adritempo', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("13", {id: 13, name: 'Onii-chan', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("14", {id: 14, name: 'ParidAlt', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("15", {id: 15, name: 'ChilledPaper', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  users.set("16", {id: 16, name: 'MasterColbat', profileUrl: 'https://cdn.discordapp.com/avatars/342013001479749643/da1363e9c00ca067921f1bf44f4d9ded.webp?size=32'});
  const userId = "465613580096765973";

  useState(() => {
    const messages = [];
    function createMessage(type, content, author, date) {
      const messageData = {
        type: type,
        content: {
          text: content.text,
          image: content.image,
        },
        author: author,
        username: author.username,
        date: date,
      }
      messages.push(messageData);
    }

    // createMessage('text', { text: 'Hey!' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'What\'s up?' }, 342013001479749643, new Date())
    // createMessage('text', { text: 'I was thinking about a super cool idea for a chat app called Nitrogen!' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'I have a few ideas on how it might work.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Huh.' }, 342013001479749643, new Date())
    // createMessage('text', { text: 'That does sound pretty cool. Can you send me a link to some concept work?' }, 342013001479749643, new Date())
    // createMessage('text', { text: 'Okay!' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'I\'ll add you to the project on Figma.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Sounds good to me!' }, 342013001479749643, new Date())
    // createMessage('text', { text: 'Awesome.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'I\m working on a sketch right now with Next js.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Sick. Here\'s a moderately long message again so that we can make sure that messages that are super long work how they\'re supposed to. I\'m actually pretty sure that it breaks when the message is too long.' }, 342013001479749643, new Date())
    // createMessage('text', { text: 'Good idea.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Sick. Here\'s a moderately long message again so that we can make sure that messages that are super long work how they\'re supposed to. I\'m actually pretty sure that it breaks when the message is too long.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Hey!' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'What\'s up?' }, 762765642830315530, new Date())
    // createMessage('text', { text: 'I was thinking about a super cool idea for a chat app called Nitrogen!' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'I have a few ideas on how it might work.' }, 465613580096765973, new Date())
    // createMessage('text', { text: 'Huh.' }, 762765642830315530, new Date())
    // createMessage('text', { text: 'That does sound pretty cool.' }, 762765642830315530, new Date())
    // createMessage('text', { text: 'Okay!' }, 465613580096765973, new Date())
    setSampleChat(messages);
  }, []);

  function updateRelativeTimes() {
    // schedule to run as soon as the next minute starts
    const now = new Date();
    const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);
    const timeout = nextMinute.getTime() - now.getTime();
    setTimeout(updateRelativeTimes, timeout);
  }

  function urlify(text) {
    var urlRegex = /(<\S+:\/\/\S+>|https?:\/\/\S+.\S+)/g;
    return text.replace(urlRegex, function(url) {
      if (url.startsWith('<')) {
        url = url.slice(1, -1);
      }
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + url + '</a>';
    })
  }

  function sendMessage(event) {
    // if the message is empty or only spaces
    if (messageBox.current.value.trim() === '') {
      return;
    }
    event.preventDefault();
    setStickToBottom(true);
    console.log(message);
    const messageData = {
      type: 'text',
      author: userId,
      content: {
        text: message,
        image: undefined,
      },
      username: 'Gamer',
      date: new Date(Date.now()),
    }
    setSampleChat([...sampleChat, messageData]);
    messageBox.current.value = '';
    manageMessageBox();
    setSendable(false);
  }

  function manageKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(event);
    }
  }

  function manageMessageBox() {

    setMessage(messageBox.current.value.trim());
    if (!messageBox.current.value) {
      messageBox.current.style.height = '20px';
    } else {
      messageBox.current.style.height = 0;
      if (messageBox.current.scrollHeight > 16 * 16) {
        messageBox.current.style.height = '16rem';
      } else {
        messageBox.current.style.height = messageBox.current.scrollHeight + 'px';
      }
    }

    if (messageBox.current.value.trim() !== '') {
      setSendable(true);
    } else {
      setSendable(false);
    }

    if(atBottom) {
      setStickToBottom(true);
    }
  }

  function manageScroll() {
    if(chatBox.current.scrollHeight === chatBox.current.scrollTop + chatBox.current.clientHeight) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  }

  // this code will run after the component is rendered
  useEffect(() => {
    if(chatBox.current && stickToBottom) {
      setStickToBottom(false);
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }
  });

  function getRelativeDay(date) {
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return `${month}/${day}/${year}`;
    }
  }

  function inputInMessageBox(text) {
    messageBox.current.value += ` ${text}`;
    manageMessageBox();
  }

  const UserList = ({id, offline = false}) => {
    const user = users.get(id);
    if (!user) {
      return(
      <div className={`${offline ? 'text-high' : 'text-sub3'} text-sm`}>
        {username}
      </div>
      )
    }
    return(
      <div className={`${offline ? 'brightness-50' : ''} text-sub3 text-sm flex items-center gap-2`}>
         <div className="relative h-6 aspect-square rounded-full overflow-hidden" style={{backgroundImage: `url(${user.profileUrl})`, backgroundSize: '100% 100%'}} />
        {user.name}
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <div className="relative bg-dark h-full w-full overflow-hidden">
        <div className="h-full w-full overflow-hidden backdrop-blur-3xl flex">
          <div className="w-24 h-full border-r border-r-void bg-mid flex-shrink-0">
          
          </div>
          <div className="w-72 h-full border-r border-r-void bg-mid flex-shrink-0">

          </div>
          <div className="flex-grow h-full flex flex-col">
            <div className="h-16 w-full flex-shrink-0 border-b border-b-void bg-mid">

            </div>
            <div className="flex-grow w-full relative overflow-hidden">
              <div className="grow-0 chat-scrollbar h-full flex flex-col pl-2 py-4 text-white font-sans bg-dark overflow-y-scroll overflow-x-hidden" ref={chatBox} onScroll={manageScroll}>
                <div className="flex-grow">
                </div>
                {sampleChat.map((message, index) => {
                const lastMessage = index === 0;
                const prevMessage = index > 0 ? sampleChat[index - 1] : null;
                const authorId = message.author;
                const username = users.get(authorId).name;
                // get time HH:MM AM/PM
                const time = message.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
                const avatarURL = users.get(authorId).profileUrl;
                // if the time difference since the last message is more than 10 minutes
                const timeDifference = prevMessage ? message.date.getTime() - prevMessage.date.getTime() : 0;
                const newSection = timeDifference > 600000; // 10 minutes in milliseconds

                const newDay = prevMessage ? message.date.getDate() !== prevMessage.date.getDate() : true;
                const relativeDay = getRelativeDay(message.date);
                const makeBig = isOnlyEmojis(message.content.text) && lengthNoSpaces(message.content.text) <=  50;
                console.log(lengthNoSpaces(message.content.text));
                if (authorId === userId) {
                  if(!prevMessage || prevMessage.author !== userId || newSection) {
                    return (
                      <div className="flex justify-end pt-5 w-[calc(100vw-43rem)] overflow-hidden gap-2 pr-2 flex-shrink-0" key={index}>
                        <div className="msg-gradient rounded-xl rounded-tr-none max-w-[75%] flex flex-col">
                          <div className="w-full flex-grow rounded-xl rounded-tr-none bg-primary-2 py-3 px-4">
                            <div className="flex w-full justify-between items-center gap-4">
                              <h1 className="font-extrabold text-sm text-primary-1">{username}</h1>
                              <p suppressHydrationWarning={true} className="text-xs text-gray">{time}</p>
                            </div>
                            <p className={`text-white ${makeBig ? 'text-3xl' : 'text-sm'} break-words whitespace-pre-wrap`} dangerouslySetInnerHTML={{ __html: urlify(message.content.text) }}></p>
                          </div>
                        </div>
                        <div className="h-10 aspect-square rounded-full overflow-hidden flex-shrink-0" style={{backgroundImage: `url(${avatarURL})`, backgroundSize: '100% 100%'}} />
                      </div>
                    )
                  } else {
                    return (
                      <div className="flex justify-end w-[calc(100vw-43rem)] items-center pt-1 flex-shrink-0" key={index}>
                        <div className="message msg-gradient relative rounded-xl max-w-[66%] flex flex-col">
                          <div className="w-full flex-grow rounded-xl bg-primary-2 py-3 px-4">
                            <p className={`text-white ${makeBig ? 'text-3xl' : 'text-sm'} break-words whitespace-pre-wrap`} dangerouslySetInnerHTML={{ __html: urlify(message.content.text) }}></p>
                          </div>
                        </div>
                        <div className="hidden-data relative w-14 h-auto overflow-hidden flex items-center justify-center">
                          <p suppressHydrationWarning={true} className="text-2xs text-high whitespace-nowrap">{time}</p>
                        </div>
                      </div>
                    )
                  }
                } else {
                  if(!prevMessage || prevMessage.author !== authorId) {
                    return (
                      <div className="flex justify-start w-[calc(100vw-44rem)] pt-5 gap-2 pl-2 flex-shrink-0" key={index}>
                        <div className="h-10 aspect-square rounded-full overflow-hidden" style={{backgroundImage: `url(${avatarURL})`, backgroundSize: '100% 100%'}} />
                        <div className="msg-gradient-gray relative rounded-xl rounded-tl-none max-w-[66%] flex flex-col">
                          <div className="w-full flex-grow rounded-xl rounded-tl-none bg-message py-3 px-4">
                            <div className="flex w-full justify-between items-center gap-4">
                              <h1 className="font-extrabold text-sm text-primary-1">{username}</h1>
                              <p suppressHydrationWarning={true} className="text-xs text-gray">{time}</p>
                            </div>
                            <p className={`text-white ${makeBig ? 'text-2xl' : 'text-sm'} break-words whitespace-pre-wrap`}>{message.content.text}</p>
                          </div>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className="flex justify-end items-center w-[calc(100vw-44rem)] pt-1 flex-row-reverse flex-shrink-0" key={index}>
                        <div className="message msg-gradient-gray relative rounded-xl max-w-[66%] flex flex-col">
                          <div className="w-full flex-grow rounded-xl bg-message py-3 px-4">
                            <p className={`text-white ${makeBig ? 'text-2xl' : 'text-sm'} break-words whitespace-pre-wrap`}>{message.content.text}</p>
                          </div>
                        </div>
                        <div className="hidden-data relative w-14 h-auto overflow-hidden flex items-center justify-center">
                          <p suppressHydrationWarning={true} className="text-2xs text-high whitespace-nowrap">{time}</p>
                        </div>
                      </div>
                    )
                  }
                }
              })}
              </div>
              <div className={`absolute bottom-4 rounded-md shadow-xl left-4 ${!emojiPicker ? 'hidden': 'block'}`}>
                <Picker onEmojiSelect={(e) => {
                  inputInMessageBox(e.native);
                  messageBox.current.focus();
                  setEmojiPicker(false);
                  }}
                  onClickOutside={(e) => {
                    emojiPicker ? setEmojiPicker(false) : null;
                    // messageBox.current.focus();
                    }} />
              </div>
              <div className={`absolute bottom-0 w-full h-6 fade-off duration-100 ease-linear ${atBottom ? 'opacity-0': 'opacity-100'}`}>

              </div>
            </div>
            <div className="relative w-full flex-shrink-0 p-4 pt-0 flex-items-center bg-dark">
              <div ref={messageContainer} className="bottom-4 w-full min-h-[2.75rem] h-auto bg-black rounded-lg text-white flex overflow-hidden gap-4 px-4">
                <div className="h-[2.75rem] flex-shrink-0 flex items-center group-hover">
                  <button className="w-8 aspect-square overflow-hidden rounded-md group flex items-center justify-center" onClick={(e) => setEmojiPicker(true)}>
                    <RiEmotionLine className="flex-shrink-0 text-2xl text-sub2 hover:text-primary-1 hover:scale-125 duration-200 ease-out"></RiEmotionLine>
                  </button>
                </div>
                <div className="h-full flex flex-grow py-3">    
                  <textarea style={{height: '20px'}} className="msg-scrollbar bg-black flex font-medium w-full outline-none text-sm placeholder-sub2 resize-none" placeholder="Write a message..." onKeyDown={manageKeyPress} onChange={(e) => manageMessageBox()} ref={messageBox}></textarea>
                </div>
                <div className="flex-shrink-0 flex gap-4">
                <div className="h-[2.75rem] flex-shrink-0 flex items-center">
                  <button className="w-8 aspect-square overflow-hidden rounded-md group flex items-center justify-center" disabled={!sendable} onClick={sendMessage}>
                    <RiSendPlane2Line className={`text-2xl transition-all duration-200 ${sendable ? 'text-primary-1 group-hover:brightness-75' : 'text-sub2'}`}></RiSendPlane2Line>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-full border-l border-r-void bg-mid flex-shrink-0 flex flex-col py-6 px-4 pr-2 select-none gap-2 overflow-y-scroll side-scrollbar">
            <div className="w-full flex items-center flex-shrink-0">
                <p className="font-black text-xs text-sub3 pb-2">THIS COMMUNITY</p>
            </div>
            <div className="bg-darker rounded-lg w-full p-4 flex flex-col gap-2 flex-shrink-0">
              <div className="font-black text-xs text-sub">ABOUT THIS COMMUNITY</div>
              <div className="text-sub3 text-sm w-full">This is an awesome community made on Nitrogen. Placeholder text.</div>
              <div className="font-black text-xs text-sub pt-2">COMMUNITY CREATED</div>
              <div className="text-sub3 text-sm w-full">September 12, 2022</div>
              <div className="font-black text-xs text-sub pt-2">COMMUNITY STATS</div>
              <div className="text-sub3 text-sm w-full">13 Members</div>
              <div className="text-sub3 text-sm w-full">8 Chats</div>
              <div className="text-sub3 text-sm w-full">7 Online members</div>
            </div>
            <div className="bg-darker rounded-lg w-full p-4 flex flex-col gap-2 flex-shrink-0">
              <div className="font-black text-xs text-sub">YOU JOINED THIS COMMUNITY ON</div>
              <div className="text-sub3 text-sm w-full">October 5, 2022</div>
            </div>
            <div className="w-full flex items-center flex-shrink-0">
                <p className="font-black text-xs text-sub3 pt-4 pb-2">COMMMUNITY MEMBERS</p>
            </div>
            <div className="bg-darker rounded-lg text-sub3 w-full p-4 flex flex-col gap-2 flex-shrink-0">
            <div className="font-black text-xs text-sub flex">OWNER <div className="ml-auto font-black">1</div></div>
              <UserList id="465613580096765973" />
            </div>
            <div className="bg-darker rounded-lg w-full p-4 flex flex-col gap-2 flex-shrink-0">
              <div className="font-black text-xs text-sub flex">MEMBERS <div className="ml-auto font-black">4</div></div>
              <UserList id="342013001479749643" />
              <UserList id="457710227240779790" />
              <UserList id="494249333986689035" />
              <UserList id="762765642830315530" />
            </div>
            <div className="bg-darker rounded-lg w-full p-4 flex flex-col gap-2 flex-shrink-0">
              <div className="font-black text-xs text-sub flex">BOTS <div className="ml-auto font-black">2</div></div>
              <UserList id="11234" />
              <UserList id="12234" />
            </div>
            <div className="bg-darker rounded-lg w-full p-4 flex flex-col gap-2 flex-shrink-0">
              <div className="font-black text-xs text-sub flex">OFFLINE <div className="ml-auto font-black">6</div></div>
              <UserList id="11" offline />
              <UserList id="12" offline />
              <UserList id="13" offline />
              <UserList id="14" offline />
              <UserList id="15" offline />
              <UserList id="16" offline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}