### INIT COMMIT: I dont hide anything... Typescript log of how it should work see `doc\.graveyard` I will make this in go.. like jq ...

#### BRAINSTORM STATUS: almost completed ... time for code soon! 

The concept is a monad style easy to remember file and directory operation pipeline. Its aware of media and various tasks around this concept.
A compile function stores your chains into a profile.

see `doc/.graveyard` for now I won't split it up: until we start the GO conversion... There are some really hard challenges in the arch so far.
When that juncture begins see: this repo: `https://github.com/mattbis/dq-go.tool`

This being said its entirely possible in Node; however I already know that and I want to make a beefy project in Go to improve my understanding and skills in it.

This could change if stuff like magic, media and any other challenges make it too time consuming. 

Whats missing?

- split up everything
- modes
- fine grained algorithms for everything... 

General Rules & arch summary :-

- plural means any within the result set...
- singular means always the first, or with .index() a position
- all functions accept globs or a finite path
- store known history - owners/owner 
- store magnitudes - size of result sets
- custom commands - turn a record into a profile stored command easy to use again
- undo/redo ( expensive / slow )
- util for quick simple operations .structure(mask).copy(), .flatten(TYPE).if().copy()
- internal scripts not monad.. ( this might be better as chains will get a bit silly )
- auto configure or configure () ie.. volumes() find_temp() for archive operations()
