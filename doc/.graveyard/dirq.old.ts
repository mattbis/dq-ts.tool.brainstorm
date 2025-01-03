//#region dirq
// import * as gblNodeFs from 'node:fs'
// import promises from 'node:fs'
// import {assert} from 'node:assert'
namespace DirQ {
    //#region dq-formats
    export class DQ_FORMATS {
        // can use companion or internal libraries.... I think for the final internal.. 
        static DQ_ARCHIVE_FORMATS= {
            // '7z': {
            //     ext: '7z',
            //     companion: '7z',
            //     op_map: {}
            // },
            'zip': {
                ext: 'zip',
                //companion: 'zip',
                op_map: {}
            },
            'zst': {
                ext: 'zst',
                //companion: 'TODO',
                op_map: {}
            },
            'tar': {
                ext: 'tar',
                //companion: 'tar',
                op_map: {}
            },
            // used to speed up undo/redo with a filter for file_types
            'brotli': {
                op_map: {}
            }
        }
        // change switches
        static DQ_ARCHIVE_PROFILES= {
            'fast': {
                //'7z':{},
                'zip':{},
                'zst':{}
            },
            'normal': {
                //'7z':{},
                'zip':{},
                'zst':{}
            },
            'extreme': {
                //'7z':{},
                'zip':{},
                'zst':{}}
            ,
            // dependent on memory size
            'xextreme': {
                //'7z':{},
                'zst':{}
            },
            'store': {
                //'7z':{},
                'zip':{},
                'zst':{},
                'tar':{}
            }
        }
    }
    //#endregion dq-formats
    //#region dq-matcher
        // securely matching strings...
    //#endregion dq-matcher
    //#region dq-selectors
    // maps the types of files that are worth fast compressing, when undo and redoing....
    // this data itself is gonna grow huge, if you were to consider os stuff, so its best kept to generalities that are definitely worth it...
    // + considering the cost of decompression
    export const DQ_COMPRESSION_TYPE_MAP = {
        fast: [
            {glob: '*.txt'}
        ],
        ignore: [
            {glob: ['*.png', '*.jpg'], description: 'common image file formats'},
            {glob: ['*.7z', '*.zip'], description: 'common file compression formats' }
        ]
    }
    export const DQ_SHELLS= {}
    export const DQ_TERM_EMU= {}
    export const DQ_SELECTORS= {}
    export const DQ_SPECIFIERS= {
        GLOB: {},
        PATH: {},
        DRIVE: {}
    }
    export const DQ_I18N_MAP = {
        default: {
            'en-GB': 'compressed_file_system_node'
        }
    }
    export const DQ_ATTRIBUTE_DICT = {
        'c': {
            'description' : 'compressed_file_system_node'
        }
    }
    export const DQ_KNOWN_ATTRIBUTES_OS= [
        {id:'r'},{id:'a'},{id:'d'}, // all operating systems
        // windows 7+
            // powershell and .net know about this when you query with Child-Item so it must be possible
            //{'c':''} // there is no attribute for this.. but somehow they have code in .net that knows it
            // so we could inject one .. 
        // linux
        // unix
        // osx
    ]
    // TODO: map to os
    export const DQ_PROPS=['name','attribute','path','date','user','count']
    // date of set
    export const DQ_DATE_SHORTAND_SELECTORS=[
        'da','date',
        'dy','days',
        'mo','months',
        'yr','years',
        'hr','hours',
        'mi','minutes',
        's','seconds',
        'ms', 'milliseconds',
        // if device supports:
        'ns', 'nanoseconds',
        'e', 'epoch', 'u','unix'
    ]
    //#endregion dq-selectors
    //#region dq-rename
    // TODO: intelligent based on watch
    export const DQ_RENAME_RULESET=[]
    /*
    */
    //export type 
    //#endregion dq-rename
    //#region dq-os-windows
    export class DQ_OP_WINDOWS {
        locked() {}
        // overloads? for things like background(copy()) since having #IF_WINDOWS would be terrible
    }
    //#endregion dq-os-windows
    //#region dq-operators

    // function enumerable(value: boolean) {
    export function experimental(val:boolean|undefined = true) {return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){}}
    export function terminator(val:boolean|undefined = true) {return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){}}

    // TODO: all arguments that are ops need to be handled the same way
    // TODO: ops need metadata , to say what they handle or can have next instead of rules
    export class DQ_OP {
        
        _set_data(id,v) {}
        _get_data(id) {}

        _get_flag(id) {}

        _set_filter(id,v) {}
        _get_filter(id) {}

        //#_set_property(id,v) {}
        //#_get_property(id) {}

        /* set current working dir read location */
        cwd(path) {}
        /* you can set target dir as a target location effectively - instead of argument */
        td= (a) => this.target(a)
        // forces the operations to a target location
        target(a) {}
        // TODO: ==> td(ramd("letter")) ==> operations are in a ram drive
        // td().ramd() // td will expect a path next, so if the next in chain is ramd it will use that... 
        // the whole monad thing introduces a ton of annoying rules... and i might abandon it.. 
        ramd() {}
        //_ram() {}

        // based on resultset or operands
        and() {}
        or() {}
        if() {}
        
        // if you macro recorded record() only if ok()
        ok() {}
        success() {}
        succeeded() {} // ==> all things that succeeded

        fail() {} // ==> unable_to_complete_operation()
        failed() {} // ==> failed operations output
        
        error() {} // ==> processing resulted in an item() with error()
        errored() {} // ==> errors so far that occured that were not fatal()
        
        warn() {} // ==> not critical but needs attention()
        warned() {} // ==> all current warnings

        //  list of paths or filter, in the resulet set
        ignore() {
            // from resultDict.. ignore.. zero items
        }

        // TODO: data ref or path or dir or file or value to b as a glob copy each a to b as glob ?
        // or most likely just a simple copy and something like above when 
        copy(a,b) {
        }

        // for a macro compiles a chain into a function so that next time you use it.. is just the calls / bytecode .. 
        // and much faster.. ( each chaining and monad reference is slower if it back references 
        static compile() {}
        // for a script inlien things that are possible
        static inline() {}

        // instead of using environment variables shortcuts => config() over profile() to set a behaviour TODO(matt): cleanup terms... 
        env(env_k, env_v) {}
        
        // this will add to operation
        static checksum() {
            // exit badly ==>
            //this.d.flags.checksum_operation = 1
        }
        // protect files with parq
        //parq(){}
        //__raw(){}
        // gets .. --> fileinfo object with os direct properties ==> like .net FileInfo
        fileinfo(){}
        fi() {}
        
        /* ---------------------------------------------------------------------- */

        input({keys:[], toVar, toBool}) {}
        // can set a thing before
        quiet() {}
        confirm() {}
        question(questions, scenario) {}
        
        //show() {}

        merge(a,b) {
            // for a merge into runtime, merges two calls from a logic divergence.. into one resultset
        }

        // of resultSet
        index({integer, name}){
            // if name => name()
            // if integer _index()
        }
        zero() {} // ==> first() ? usually this would mean nuking the set... 

        // TODO: of a result set contents
        //index().contents()
        
        // create things from some type
        from(T) {}
        
        // mid() {}
        // samp() {}
        range() {}
        
        /* dir path level from current set */
        level() {}
        
        /* parent dir of path */
        parent() {}
        
        /* from current set all sibling items */
        sibling() {}
        siblings() {}
        
        /* from current set all child path items */
        children() {}
        child() {}
        
        /* from current set all ancestor path items */
        ancestor() {}
        ancestors() {}
        /* root of the path */
        root() {}
        /* roots of paths */
        roots() {}
        /* limit the result set to x num */
        limit() {}
        pick() {} // ==> filter

        /* for a fs node get its path, always first item in set */
        path(){}
        // array of paths typically used to get paths of result set
        paths({filter}) {}

        // todo: universal path segment handler... 
        segment() {}

        // for an index the file, or the first file
        file({index, name, ext}) {
            // if set is zero return
        }
        // files is all, without a specifier()
        files() {}

        is_file() {}
        //isf(){}
        
        is_folder() {}
        is_dir() {}
        //isd() {}
        folders() {}
        
        is_path() {}
        //isp() {}
        
        is_empty() {}
        //ise() {}
        empties() {}
        
        is_link() {}
        //isl() {}
        // ie symlinks, or hardlinks
        links() {}
        symlinks() {}
        hardlinks() {}

        // path is windows form
        is_windows() {}
        // path is unix form
        is_unix() {}
        
        has_files() {}
        // ==> if().files()
        has_folders() {}
        // ==> if().folders()
        // has_equal() {} => filter().each().equal()

        // handy shortcut based on known formats
        is_archive() {}
        //isa() {}
        archives() {}

        // force path form into another... 
        // for type into another same as coerce, not valid for everything... 
        coerce() {}
        mangle() {}

        // matching attributes
        attrib() {}
        attributes() {}

        // matching name
        name() {}

        // matching extension
        ext({name}) {}
        extension= a=>this.ext(a)

        // of selectino or path ... 
        // gets dir() of file() or is first dir*() or result set 0, with index is 
        dir() {}
        disk(){}
        // volume of path ( this can differ to disk in that it could be virtual of some kind )
        volume(){
           //DQ._warn_experimental() {}
        }
        // gets all known disk volumes from the os, used with find_temp() if you dont configure()
        volumes() {}
        
        // for a path gets the unique volume indentifer, this is not the same as hash() which is a path... 
        // the identifier is for disks () ... based on their mount, os and os metadata()
        // TODO: however this will be confusing for people.. so identifier might be the same ... and passes through to hash()
        identifier() {}

        // // if nothing is supplied it returns a random identifer

        // creates a UI based on the result set... 
        //static const ui = new class DQ.GUI()

        // execuate something with a dirq ResultSet
        exec({cmd,macro}) {}
        execute() {}

        // normalise a raw result set into ...  ie string input such as paths... not a binary normalise... 
        normalise(SPACES, RAW) {}

        // internal method to lookup what fragments dQ knows about
        __lookup() {}
        // remove one - for example something you dont want it to know about
        __forget() {}
        /* anything passed to command can be recalled across usage - this is configured by using the --profile mechanism */
        __remember() {}
        /* this clears the cache of things its recorded by some amount */
        __housekeep(age) {}

        // tag a path - into a set ( ie. tag will override previous value if clashes )
        // is not versioned always clobbers
        tag() {}

        // version - for something version it ==> int index
        version(prop, int, val) {}
        //version(prop, int) {}

        // clear reference - path, variable or stack
        // TODO: id might be a fast uid so this is simple , but thats probably a bad idea
        // paths always are unique... however a clashing one can be handled
        clear({path, id}) {}
        //reset() {}

        // creates output of clashing 
        clashing() {}

        // for the id, or current, get frames contents, in chain or to cli
        frames(id, options) {}
        
        // set as macro current frames... 
        _macro({frames}) {}

        // wrapper to save into unique filename()
        to_script() {}
    
        // TODO: binds a key to something
        // @experimental()
        //_key() {}

        // binds a path to opframes saved by macro
        //bind(path, opFrames) {}

        // result set
        //each() {} => filter()
        filter({props,date}) {}
        // this generator is not secure but used to supply the below ... 
        _random() {}
        // for example you want to make a range of file or dir names...
        // get int
        int() {}
        ints() {}
        // get float
        float() {}
        floats() {}
        // or you can use to control other methods, instructions ==>
        // position works by index passed on current result set
        position() {}

        // set tests
        same() {}
        equal() {}

        // for selection process with function
        //process(fn) {}
        // arbitrary pipe
        pipe() {}
        std_out() {}
        std_err() {}
        
        //update() {}
        //refresh() {}

        /* gets all child items within the path and sizes and calculates its size against a std scale() */
        // compare will produce array of change, from arbitrary otherwise its the resultset
        magnitude(...compare) {}

        _time(i,j,k) {}
        from_date() {}
        to_date(aToDates){}
        stat(path){}
        // use prop.count to ... 
        recent({date,days,months,years,hours,minutes,seconds,unix},{...prop}) {}
        old({date,days,months,years,hours,minutes,seconds,unix}) {}

        // change set
        static move_path(a, b) {}
        move(a, b) {
            //return DQ.move_path(a, b)
        }

        /* 
        flatten [dirs] for current path
            for i levels flatten dirs - if files clash ... erm 
        */
        _flatten_dir(options,...a) {}
        // level overridden
        flat(options,...a) {
            /* optimise algorithym - recurse levels into top most */
            
        }

        delete() {
            // if safe -- try delete
            // if safe try delete
        }

        comp() {}
        //lcma2() {}
        zip() {}
        zst() {}
        tar() {}
        brot() {}
        
        decomp() {}
        //unlcma2() {}
        unzip() {}
        unzst() {}
        untar() {}
        unbrot() {}

        // matches some glob of contentifiable things
        //src() {}
        
        // not sure this is possible
        // uses the main store, or configured to another probably better location... ( so it wont fill up the C , first volume ) 
        recycle_int(a) {}
        recycle= (a) => this.recycle_int(a)
        //recycle_os() {}

        // diff current result set to some other this.d.current
        diff(fromSet, toSet) {}

        // ruleset is in precedence...
        rename(ruleSetCollection) {
            
        }

        // send to log as user
        // default logging should do this
        //log() {}

        // records the current results via path
        //set() {}
        //get() {}

        // records all params
        values() {}
        // records only operands
        operands() {}
        
        // search any known id to get a fragment result search
        known({fragments}) {}

        // store for session() {} this.d ResultSet as state as id
        store({id,data}) {
            // if no id internal_id
        }
        // teh command stores teh last 32 things it did... in its usual frames

        // store result set to compare or whatever else on stack
        push() {}
        // pop the store stack() {}
        pop() {}

        // save sync stages, or ref/vars
        save() {}
        //  load sync stages, or ref/vars, script
        load() {}
        // play sync stages
        play(stagesId) {}

        // config is like load() and play()
        // however it can just mean load some vars for this task... ie, if it bails from low memory, you just run it again, and set this
        // you could also use a profile instead..  
        // find(configFile).config() // hmm
        config(location) {}

        // get frame
        frame({index,name,profile}) {}
        // record changes since arm()
        record({id,props}) {}
        // arm recording with some props
        arm({id,props}) {}
        // analogous to stop() {}
        disarm({id,props}) {}
        // use save() with syntax to record to profile:slot
        //
        //stop() {}

        // its a good idea to make the backup or scratch disk for undo/redo on another disk... since its volatile.. and this will speed up operations.
        /* these use their own instance of recording */
        @terminator()
        undo() {}

        /* used by undo or redo ( if enabled ) or manually... */
        // uses bundled location or specified... 
        backup() {}

        @terminator() 
        redo() {}

        // TODO: passing the undo/redo recording into a fast compressor
        
        // for a path get users() {}
        users() {}

        // the first path component seen() ==> root
        
        // shortcut to dirs() with filter() 
        // ie with structure(*.ext) you want to copy just that ) + whatever else... since it will always
        // resolve from root()
        structure() {}

        // gets or sets a limit to the result set
        count() {}

        // ==>
        one() {}
        // # stupid shortcuts that are really just to count..
        first() {}
        last() {}
        quarter() {}
        half() {}
        third() {}
        sixth() {}
        eigth() {}
        ninth() {}

        // TODO: too ambiguous
        // index by .. prop() attrib() date() 
        // instead of count() index warning.. etc
        //by() {}

        // cmd itself history from user would then take precedence...

        // this would only be useful with profile('save_autohistorylikethis')
        // this sets teh cmd_history from an instance into static
        // cmd_history() {}
        // // this gets all instances cnd history
        // static cmd_cmd_history() {}

        // acts a terminator to see what would happen.. requires --show
        @terminator()
        dry_run() {}
        
        recurse() {}
        recursive() {}

        // position in chain 
        options() {}

        // get owner or matches owner
        owner() {}
        // get owners or matchers owners
        owners() {}

        // user() is the current env() user.
        // user(n) set to n
        user(v,err) {}

        // read file as content() {} to get #map()
        content() {}

        // // like select object when #map() to a report... 
        // transform() {}
        
        // static csv(a) {
        //     //assert(DQ.is_object(a))
        // }
        // static json() {}
        // static xml() {}

        #map(o,fn) {
            // foreach thing do something else or chain()     
        }
        
        // chunk any output
        chunk() {}
        // binary form, for operation with internal methods() instead of reference
        bin() {}
        // magic match()
        @experimental() 
        // if(magic(thing))
        magic() {}
        // type of current thing or ref on stack, var
        type() {}

        // binary join data in stream
        // ie text files, images, audio of ResultSet
        @experimental()
        // sep might be some kinda frame separator or you own schema...
        // bin_join(ref, sep) {}
        bin_join() {}

        //@experimental()
        //join() 

        /* a sep can be from a type ==> from(' ') or a code ==> utf8('code') */
        // when joining a collection of things use this to seperate them .... often 0 will suffice, TODO: from media(type('wav')).sep() ??
        // create a sep with id, or make one using an internal type in some kinda chain.. 
        sep() {}
        
        // code pages - for string to utf8
        utf8() {}
        
        // ascii / utf8 charset() code, from whatever its given
        char_code() {}
        char_set() {}
        
        // // convert type to binary()
        // bin() {}
        // binary() {}

        // how much change occurs in binary stream
        @experimental()
        entropy() {}

        // contains sparse regions, configured statically
        @experimental()
        sparse() {}

        // binary stream contains something 
        @experimental()
        contains(T){}

        @experimental()
        // finds /t/, /tmp/, /temp/ on fastest disks
        find_temp({vols}){}

        // set a loc, set in the profile... or the config, or for a resultSet()
        temp() {}

        // internal but public ... 
        @experimental()
        test_read_speed() {}

        @experimental()
        test_write_speed() {}

        @experimental() 
        // for a stage of a script or chain isolates the current stack to just this path....
        // so you read something , decompressed it on a tmp drive, inspected it, found a file, and then you wanna forget everything but that file... 
        // or in the extreme a giant dir of entries... with above, or some other operation... 
        // this means all references and other stuff are removed from memory... and the cwf and cwd are set ot this clearing caches... 
        isolate() {}
        
        // watch a glob, path, file use to chain, next command, pipe
        @experimental()
        watch() {}

        @experimental() 
        default() {
            //reset runtime to default...
            // constructor use profile.default
        }

        @experimental() 
        // returns array of memory values
        memory() {
        }
        // returns only information for specified volumes
        // this is staggered to not overwhelm the system, many programs neglect things particularly with complex usb storage...
        @experimental() 
        diskspace(volumes) {}

        // get a flag.. you cannot set them... they are set by the inference of a method..  to its operations
        flag() {}
        // and likewise config('key.to.item')

        // public and used for almost anything happening
        assert() {
            // _frame() {}
            // _script() {}
            // _data() {
                // val
                // param
            //}
            // _frames() {}
        }

        // trigger the maintenance cycle
        maintenance() {
            // housekeep by default maximum age of fragments ( 3 years ) 
            // remove any incorrect references to working dirs
        }

        // schedule() {
        // }

        pipe() {}
    }
    //#endregion dq-operators
    //#region dq-interfaces
        // TODO: when split up solid style interfaces and cleaner design.. 
        // interfaces in oo. too various parts of structures
    //#endregion dq-interfaces
    //#region dq-logger
        // TODO: logging class
        // everything is logged.. rotated and incremental.. you can even .zip() if needed
    //#endregion dq-logger
    //#region dq-ui
    export class DQ_UI {
        static CONTEXT = {
            callbacks: {
                //DQ.GUI._debounce(matcher.isValidPath)
            }
        }
        // brings up cmd line menu
    }

    //#endregion dq-ui
    //#region dq-class
    /*
    */
    export const VERSION = "0.1.0.20"

    export class DQ {

        static version= VERSION
        static productName= "DQ"
        static codeName= ""
        static appName= "${DQ.productName}${DQ.codeName}${DQ.version}"
        static versionTagName= "ALPHA"
        static subVersion=`${DQ.version}${DQ.versionTagName}${Date.now()}`

        static CMD= {
            // restore opframes
            'last': {},
            'save': {},
            'load': {},
            'profile': {},
            // if the below are never called.. dq does it automatically.... 
            
            // create a bare bones dq instance clobbering user data stuff
            'init': {},
            // this performs a few steps to get basic histor() and system running() 
            'setup': {}
        }
        
        static MAGIC= {
            virtual: {
            },
            media: {
            },
            system: {
            }
        }

        static STRUCT= {
            path: {v1:{disk: '',
            p: '',
            subver: '',
            now: '',
            kpatts: [],
            // props are for dq to use as custom for any path within its own data store
            kprops: [],
            owners: [], // known owners
            lhash: []}}
        }

        static STORE= {
            userHome: [''],
            knownStores: []
        }

        // called to set state
        /* this will sync what it knows about the os, and what you are doing .. this records frags and paths.. etc. As well volume information. */
        _gautosave() {
            // save runtime flag map
            // save new fragment data
            // save operation frames as `_last`
        }
        _gautoload() {
        }

        //session() {}
        
        // creates the dirs - in /home or /profile and empty setup
        // establish presence of useful companions <- in future its only going to be in teh runtime probably... but some things have to be companions,
        // or this makes teh entire thing a lot faster to implement.. in the initial form..
        static setup() {}

        // finds temporary locations and some metadata about the system... 
        // can ask questions about how you wanna use it
        // can ask questions about how you will configure it
        static install() {}

        static PROFILE= {
            fast: {
                global: {
                    config: {
                        undoRedo: 0
                    }
                }
            },
            safe: {
                global: {
                    config: {
                        undoRedo: 1
                    }
                }
            },
            default: {
                global: {
                    config: {
                        checksum: false,
                        undoRedo: true,
                        autoSave: true,
                        confirmation: false,
                        saveHistory: true
                    }
                },
                local: {
                    known:{
                        backupPaths: [],
                        searchPaths:[]
                    },
                    magnitude:{sample:{nodeCount:[1e2,1e6,1e9]}},
                    tags: {},
                },
                op: [ DQ_OP.checksum ]
            }
        }

        #hash() {}

        d= DQ.get_data_struct()

        //pq= DQ.get_queue_struct()
        //static PQ= {}

        debug() {}

        // static to_obj() {
        //     // .reduce()
        //     DQ.each(k => {
        //         //e => typeof e === "object" ? e : DQ.to_obj(e) 
        //     })
        // }
        // static to_str() {}
        // static to_arr(args) {
        //     if(!Array.isArray(args)) {args=[args]}
        //     return args
        // }

        // static as_stream() {}

        // static each(...a) {return DQ.each_sync(a)}
        // static each_sync(fn, ...args){
        //     args= DQ.to_arr(args)
        //     // TODO: unrolled do do(whiles)
        //     const result= args.forEach(fn)
        //     return result
        // }
        // // used where sync code needs to emit for stream
        // static each_emitter(fn, ...args){
        // }
        // static reduce() {
        // }

        
        // TODO: Op definition wrapper... so don't end up with loads of collections that are all separate.. this can be versioned...
        // internally some of hte logic should be just operations and use the same code so that testing is easier to build up and 
        // the size is kept minimal
        static DQ_OP_STRUCT ={
            v: '', // version
            f: {}, // flags
            p: {} // params
        }
        
        // static get_opstate_struct() { return {
        //     frames: [ DQ.get_opframe_struct() ]
        // }}

        static get_result_struct() {
            return {
                result: []
            }
        }
        static get_opframedata_struct() {
            return [{
                inst: [],
                operands: []
            }]
        }
        
        static get_opframe_struct() {
            return {
                before: {},
                frame: {
                    d:[DQ.get_opframedata_struct()]
                }
            }
        }

        static #repl() {}

        // execute
        static exec(options, ops) {
        }
        async sime_op() {}
        
        /* reset and created */
        static get_data_struct(version=0) { switch(version) { case 1: return {
            argsv: '', 
            argsa: '',
            /* parsed */ 
            argso: {},

            // config
            conf: {},

            // current sync, last sync, data
            //current: {...DQ.get_opstate_struct()},
            //last: {},
            //data: {},

            // object pool - this stores known data each time it runs,.. this is how it knows owner changed
            o: {
                filters: {
                    // all seen filters TODO: suggest() ..
                },
                // paths
                p: {
                    //'path':{owner, owners, date, size}
                }    
            },
            
            flags: {
                useStreams: !0,
                shouldStopError: !0,
                shouldSlowLowMemory: !0,
                hasCompanionExecutables: undefined
            },

            dataVersion: `1.0.0-$(version)`,
            version: `$(DQ.version):`+Date.now(),

            // snapshot system data
            os: {
                // snapshot of changes...
                memory:[{histogram:[{free:'',sys:'',user:'',swap:''}]}],
                storage: [
                    // dq will do this automatically in some profile modes... otherwise you can do it from setup()
                    {identifier: '',vol:'',dev:'',path:'',sample:{speeds:[{
                        date: undefined,
                        read: undefined,
                        write: undefined
                    }]}}
                ]
            }
        } case 2: return {
            
        } } }

        // TODO: these sub structures are the same inner config form .. and need some interface/ class
        
        static BACKUP= {
            LOCATIONS: {default:{
                // default is on C , your want to give a custom one for huge scale... unless its raid or some other solution
                win: 'AppData/Roaming/DQTOOL/path/d/backup',
                osx: '$HOME/.dqtool/path/d/backup',
                unix: '$HOME/.dqtool/path/d/backup'
            }}
        }
        
        static TEMP= {
            LOCATIONS: {default:{
                win:'',
                osx:'',
                unix:''
            }},
            d: {
                known:[],
                found: []
            },
            add(tmpPath) {},
            remove(tmpPath) {}
        }

        // TODO: better mechanism
        // static ASSERTIONS= {
        //     // large number of operands, nodes
        //     warn_processing() {},
        //     // large number of blocking calls
        //     warn_inner_processing() {},
        //     // from last runs the operation is a magnitude bigger
        //     warn_magnitude() {},
        //     // the operation uses things not @stable
        //     _warn_experimental() {},
        //     // the output has clashing things
        //     _warn_clashing() {},
        //     warn_attributes_changed() {}, // since the last run the attributes have changed for the file
        //     warn_owner_changed() {}, // since the last run the owner has changed for the file
        //     warn_compressing_compressed() {}, // a file is already compressed or file system compressed
        //     warn_empty_resultset() {}, // the result set is empty
        //     warn_file_is_empty() {}, // the script or chain results contains empty files
        //     fatal_file_asdir() {},
        //     fatal_dir_asfile() {},
        //     fatal_incorrect_parameter() {}, // a key and a value are wrong
        //     fatal_incorrect_reference() {}, // the command or script contained some internal reference that is wrong
        //     fatal_cannot_read() {}, // the read operation did no succeed and failed its post hash check
        //     fatal_cannot_write() {}, // the write operation did no succeed and failed its post hash check
        //     fatal_no_temp_dirs() {}, // any configured temporary locations are not available
        //     fatal_incorrect_path() {}, // the path is not valid
        //     fatal_incorrect_volume() {}, // the volume is incorrect
        //     fatal_no_outcome() {}, // the chain or sequence results in no outcome
        //     fatal_no_access() {}, // cannot read teh file
        //     fatal_backup_location_doesnt_exist() {}, // cannot backup when they dont exist
        //     fatal_script_is_not_valid() {}, // the script was not correctly parsed
        //     fatal_missing_companion() {}, // the chain or script depends on a companion that doesnt exist
        //     fatal_cannot_coerce() {}, // the chain or script contains some logic that means we can't convert to another type
        //     fatal_user_data_missing() {}, // the user data dir for dq has disappeared and oh no
        //     fatal_system_data_missing() {}, // the global data dir for dq has disappeared and oh no
        //     fatal_integrity_violation() {}, // for each item in violation, did not match expected output
        //     fatal_setup_not_completed() {}, // creation of the dirs needed failed overall message
        //     fatal_configure_not_completed() {}, // configure, which is op config, did not complete/// its terminal
        //     fatal_low_system_memory() {}, // there is no point running anything since your system has enough ram
        //     fatal_cannot_set_more_than_once() {} // something is protected, immutable or singleton and cannot be set more than once
        // }

        static BEHAVIOURS= {
            // apparent ram available to machine
            // this calculation should be working set, and not the actual total as that would cause uncessary swapping
            // ie working available set... 
            // get_total_mem() {},
            // // give float on memory consumption
            // is_mem_float() {},
            // // give boolean() 
            // is_low_mem() {}
        }

        //#file() {}
        
        static get_pipeline_operator= () => 
            async (prevData, nextData) => 
                await Promise.resolve()

        // TODO: this is not correct
        async #pipeline(opFn) {
            const next= !opFn
                ? await opFn()
                : await DQ.get_pipeline_operator()({},{})
            return await Promise.resolve(next)
        }

        async #clustered_pipeline() {
        }

        /* turn any operation into stream */
        as_stream() {}

        I(...a) {return a}

        // get and setters, species, slots test for speed for now:-
        g(kc, id) {return this[kc][id]}
        s(kc, id, v) {return this[kc][id]=v}

        // for a result set you can force an external hash reference
        // get_hash_value= id => this.g('hash', id)
        // set_hash_value= (id, v) => this.s('hash', id, v)

        /* returns the current hashing used for data values */
        #_get_hash_wrapper() {
            // first call to_obj .. and coalesce data into object
            // TODO: produce blake hash ? of JSON.stringify()
            // TODO: considering the data could become massive, this is not a great solution... 
            // TODO: call hashing function return string
        }

        #___get_blake3_hash(str:string):string {
            const blake3HashStr=""
            return blake3HashStr
        }

        
        _init(d) {
            // this.index(works)
            this.d = d && Object.assign({}, d) || DQ.get_data_struct()
        }

        constructor(d) {
            this._init(d)
            this._configure(this._get_config(this.d))
        }

        repl() {}

        get(){return this}

        /* TODO: best method to clone internal data, and restore state */
        clone(){return new DQ(this)}

        /* TODO: slots and species etc */

        _get_config_struct(data) {
            return {
                version: `${DQ.version}`,
                //subver: `${Date.now()}${data??.subver}`,
                inject: {
                    methods:[
                        {id:"data"}, 
                        {id:"flag"}, 
                        {id:"filter"}, 
                        {id:"property"}
                    ]
                },
                logger: {

                },
                profile: ['stop_on_errors']
            }
        }

        //_Logger(log_config) {}

        _configure(config/*= this._get_config_struct()*/) {
            let injectedCount = 0
            // if in config 
            for (const i of config.inject.methods) {
                const {id}=i
                DQ[`set_${i}(id,v)`]=(kc=i, id, v) => {
                    this.s(kc, id, v)
                }                
                DQ[`get_${i}(id)`]=(kc=i, id) => {
                    this.g(kc,id)
                }
                injectedCount++
            }
        }

        /* operations organised */
        static classification= {state:[],resultSet:[DQ_OP.report],fs:[],external:[],data:[],analysis:[],reporting:[],stages:[],binary:[],media:[],logic:[]}
        
        thread() {this.cluster(){}}
        
        // thread ... operation
        cluster() {
            // this runs teh entire script but uses multithreading
        }
    }
    //#endregion dq-class
    //#region dq-script-parser
    // this checks that a recorded macro script is the same subset as teh current version
    // any chars, commands wont work.. nothing will unless its the same as what the main runtime outputs...
    //#endregion dq-script-parser
    //#region dq-cli
    export class DQ_CLI {
        flags= {
            showCommands:!0, // by default show commands if no outcome
            showHelp: !0, // by default if nothing to do show help
        }
        static ARG_DEF_OPTIONS= {
            'verbose':{short:'v', desc:''},
            'debug':{short:'d', desc:''},
            'quiet':{short:'q', desc:''},
            'dryrun':{short:'dr',desc:''}
        }
        static ARG_DEF_OP= {
            'repeat':{short:'rp', desc: ''},
            'exec':{short:'e',desc:''},
            // TODO: possible like previous arch to override left or right args, in a long chain... 
        }
        static ARG_DEF_RESULTSET= {}
        // bundled operations...
        static CMD_DEF= {
            cmd: {
                // run in batch mode
                'batch':{cmd:['batch']},
                // get handy example chains
                'examples':{cmd:['examples']},
                // get all operations operations fs| each organised group
                'operations':{alias: 'o', cmd:['operations']},
                // get all op groups 
                'groups':{cmd:['groups']},
                // strictly mirror a,b
                'mirror':{cmd:['mirror']},
                // sync a,b
                'sync':{cmd:['sync']},
                // update a,b
                'update':{cmd:['update']},
                // shows all locations known to dq
                'locations':{cmd:['backup']},
                // show something
                'show':{'cmd':[/*local*/]},
            }
        }
        
        //static #render() {}
        //static #crlno() {}
        // static FORMATS={
        //     textbin: {
        //         renderer(){}
        //     },
        //     // pdf: {
        //     //     renderer() {}
        //     // }
        // }

        /* counters */
        __method_count(id) {}
        static __method_count(id) {}
        
        /* fail safe show */
        static show() {}
        
        //  if its a file it will show the compatible contents
        // if frame set show diff
        static _showStage() {}
        static _showFrame() {}
        static _showFrameDiff() {}
        static _showFile() {}
        static _showDir() {}
        static _showTable() {}
        static _showOps() {}
        static _showWindows() {}
        static _showNix() {}
        // this shows how the internal frames work... if the frame has data() it will do something otherwise its just an abstract with a set of params
        static _showTypes() {}
        static repl() {}

        // load().validate()
        static validate() {
            // _frame() {}
            // _script() {}
            // _data() {
                // val
                // param
            //}
            // _frames() {}
        }
        
        #parse_args_array() {}
        constructor() {
            // this.#argsv= argsv
            // this.#argso= this.#parse_args_object()
        }
    }
    //#endregion dq-cli
    //#region dq-service
        // nix: daemon 
        // windows: service
        // TODO: osx: ...
    //#endregion dq-service
}
//#endregion dirq
