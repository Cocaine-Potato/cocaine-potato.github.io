local ws, err = http.websocket("ws://localhost:20000")
local cid = getComputerLabel() + " (" + getComputerID() + ")"
ws.send(cid)