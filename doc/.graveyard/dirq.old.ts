//#region dirq
// import * as gblNodeFs from 'node:fs'
// import promises from 'node:fs'
// import {assert} from 'node:assert'
namespace DirQ {
    //#region dq-formats
    export class DQ_FORMATS {
        // TODO: the below depends on what go supports, in node, its mostly wrapping this stuff... in go i think there are some libraries have to research...
        // either doesn't matter, speed i dont care about just a reliable product.. 
        static ARCHIVE_FORMATS= {
            '7z': {
                ext: '7z',
                companion: '7z',
                op_map: {}
            },
            'zip': {
                ext: 'zip',
                companion: 'zip',
                op_map: {}
            },
            'zst': {
                ext: 'zst',
                companion: 'TODO',
                op_map: {}
            },
            'tar': {
                ext: 'tar',
                companion: 'tar',
                op_map: {}
            }
        }
        static ARCHIVE_PROFILES= {
            'fast': {'7z':{},'zip':{},'zst':{}},
            'normal': {'7z':{},'zip':{},'zst':{}},
            'extreme': {'7z':{},'zip':{},'zst':{}},
            // dependent on memory size
            'xextreme: {'7z':{},zst:{}},
            'store': {'7z':{},'zip':{},'zst':{},'tar':{}},
        }
        static enum_ARCHIVE_SWITCHES= {}
    }
    //#endregion dq-formats
    //#region dq-selectors
    export const DQ_SELECTORS= {}
    export const DQ_SPECIFIERS= {
        GLOB: {},
        PATH: {},
    }
    //#endregion dq-selectors
    /*
    */
    //export type 
    //#region dq-operators
    export class DQ_OP {
        /* from sample set get deviation - ie */
        //static deviation(i,j) {}

        // set_data(id,v) {}
        // get_data(id) {}

        // set_flag(id,v) {}
        // get_flag(id) {}

        // set_filter(id,v) {}
        // get_filter(id) {}

        // set_property(id,v) {}
        // get_property(id) {}

        /* set current working dir */
        cwd(path) {}

        and() {}
        or() {}
        if() {}
        
        // if you macro recorded record() only if ok()
        ok() {}
        success() {}

        fail() {} // ==> unable_to_complete_operation()
        failed() {}
        
        error() {} // ==> processing resulted in an item() with error()
        errored() {}
        
        warn() {} // ==> not critical but needs attention()
        warned() {}

        ignore() {
            // from resultDict.. ignore.. zero items
        }

        copy(a,b) {
        }

        // for a macro compiles a chain into a function so that next time you use it.. is just the calls / bytecode .. 
        // and much faster.. ( each chaining and monad reference is slower if it back references 
        static compile() {}

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

        input({keys:[],toVar,toBool}) {}
        confirm() {}
        question(questions,scenario) {}
        
        //show() {}

        merge(a,b) {
            // for a merge into runtime, merges two calls from a logic divergence.. into one resultset
        }

        // of resultSet
        index({integer,name}){
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

        /* for a fs node get its path, always first item in set */
        path(){}

        // todo: universal path segment handler... 
        _path_segment() {}

        // for an index the file
        file({index,name,ext}) {
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
        paths() {}
        
        is_empty() {}
        //ise() {}
        empties() {}
        
        is_link() {}
        //isl() {}
        // ie symlinks, or hardlinks
        links() {}

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
        mangle_path() {}

        static KNOWN_ATTRIBUTES= [
            {id:'r'},{id:'a'},{id:'d'}, // all operating systems
            // linux
            // unix
            // osx
        ]
        // matching attributes
        attrib() {}
        attributes() {}

        // matching name
        name() {}

        // matching extension
        ext({name}) {}
        extension= a=>this.ext(a)
        // array of paths typically used to get paths of result set
        paths({filter}) {}

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

        //static const ui = new class DQ.GUI()

        // execuate something with a dirq ResultSet
        exec({cmd,macro}) {}

        // normalise a raw result set into ...  ie string input such as paths... not a binary normalise... 
        normalise(SPACES, RAW, ...) {}

        // internal method to lookup what fragments dQ knows about
        __lookup() {}
        // remove one
        __forget() {}
        /* anything passed to command can e recalled across usage */
        __remember() {}

        // tag a path - into a set ( ie. tag will override previous value if clashes )
        // is not versioned always clobbers
        tag() {}

        // set as macro current frames... 
        _macro({frames}) {}

        // wrapper to save into unique filename()
        to_script() {}
    
        // TODO: binds a key to something
        // @experimental()
        //_key() {}

        // binds a path to opframes saved by macro
        //bind(path, opFrames) {}

        static PROPS=['name','attribute','path','date','user','count']
        // result set
        filter({props,date}) {}
        // get int
        int() {}
        // get float
        float() {}
        // position works by index passed on current result set
        position() {}

        // set tests
        same() {}
        equal() {}

        // for selection process with function
        process(fn) {}
        // arbitrary pipe
        pipe() {}
        std_out() {}
        std_err() {}
        
        //update() {}
        //refresh() {}

        /* gets all child items within the path and sizes and calculates its size against a std scale() */
        magnitude() {}
        
        static warn_processing() {}
        static warn_inner_processing() {}
        static warn_magnitude() {}
        static _warn_experimental() {}

        // date of set
        static DATE_SELECTORS=[
            'da','date',
            'dy','days',
            'm','months',
            'yr','years',
            'hr','hours',
            'm','minutes',
            's','seconds',
            'e', 'epoch', 'u','unix'
        ]
        _time(i,j,k) {}
        from_date() {aFromDates}
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
        sevenz() {}
        zip() {}
        zst() {}
        tar() {}
        
        decomp() {}
        unsevenz() {}
        unzip() {}
        unzst() {}
        untar() {}
        
        // not sure this is possible
        recycle() {}
        recycle_bin() {}

        // diff current result set to some other
        diff(toSet) {}

        static RENAME_RULESET=[]
        rename(ruleSetArray) {}

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

        // save sync stages
        save() {}
        //  load sync stages
        load() {}
        // play sync stages
        play(stagesId) {}

        // get frame
        frame({index,name,profile}) {}
        // arm recording
        record({id,props}) {}
        arm({id,props}) {}
        disarm({id,props}) {}

        /* these use their own instance of recording */
        @terminator()
        undo() {}

        /* used by undo or redo ( if enabled ) or manually... */
        // uses bundled location or specified... 
        backup() {}

        @terminator() 
        redo() {}

        // for a path get users() {}
        users() {}

        // the first path component seen() ==> root
        
        // shortcut to dirs() with filter() 
        // ie with structure(*.ext) you want to copy just that ) + whatever else... since it will always
        // resolve from root()
        structure() {}

        // gets or sets a limit to the result set
        count() {}
        
        // # stupid shortcuts that are really just to count..
        first() {}
        last() {}
        quarter() {}
        
        // index by .. prop() attrib() date() 
        // instead of count() index warning.. etc
        by() {}

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
        user() {}

        // read file as content() {} to get #map()
        content() {}

        #map(o,fn) {
            // foreach thing do something else or chain()     
        }
        // chunk any output
        chunk() {}
        // binary form
        bin() {}
        // magic match()
        magic() {}
        type() {}

        // binary join data in stream
        // ie text files, images, audio of ResultSet
        @experimental()
        bin_join() {}

        @experimental()
        join() 

        /* a sep can be from a type ==> from(' ') or a code ==> utf8('code') */
        // when joining a collection of things use this to seperate them .... often 0 will suffice, TODO: from media(type('wav')).sep() ??
        sep() {}
        // code pages
        utf8() {}
        // ascii / utf8 charset() code
        char_code() {}
        char_set() {}
        // convert type to binary()
        bin() {}
        binary() {}

        // how much change occurs in binary stream
        @experimental()
        entropy() {}

        // contains sparse regions
        @experimental()
        sparse() {}

        // 
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

        version() {return DQ.version}

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
            // vast bank of stuff it knows about... TODO: correct place?
            virtual_providers: {
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
        static _gautosave() {
        }
        static _gautoload() {
        }

        /* load and save runtime data - automatic or manual */
        static save() {}
        static load() {}
        
        PROFILE= {
            safe: {
                global: {
                    config: {
                        undoRedo: !1
                    }
                }
            },
            default: {
                global: {
                    config: {
                        checksum: !1,
                        undoRedo: !0,
                        autoSave: !0,
                        confirmation: !1,
                        saveHistory: !0
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
        default() {
            //reset runtime to default...
            // constructor use profile.default
        }

        //$fs= gblNodeFs

        #hash() {}

        // data
        d= DQ.get_data_struct()

        //pq= DQ.get_queue_struct()
        static PQ= {

        }

        static can_find_exec() {}

        static is_object() {}

        static to_obj() {
            // .reduce()
            DQ.each(k => {
                //e => typeof e === "object" ? e : DQ.to_obj(e) 
            })
        }
        static to_str() {}
        static to_arr(args) {
            if(!Array.isArray(args)) {args=[args]}
            return args
        }

        static to_csv(a) {
            //assert(DQ.is_object(a))
        }
        static to_json() {}
        static to_xml() {}

        static as_stream() {}

        static each(...a) {return DQ.each_sync(a)}
        static each_sync(fn, ...args){
            args= DQ.to_arr(args)
            // TODO: unrolled do do(whiles)
            const result= args.forEach(fn)
            return result
        }
        // used where sync code needs to emit for stream
        static each_emitter(fn, ...args){

        }
        static reduce() {

        }

        static get_opstate_struct() { return {
            frames: [ DQ.get_opframe_struct() ]
        }}

        /* get empty result structure */
        static get_result_struct() {
            return {}
        }
        static get_opframedata_struct() {
            return []
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

        static exec() {}
        
        /* reset and created */
        static get_data_struct(version=0) { switch(version) { case 0: return {
            argsv: '', 
            argsa: '',
            /* parsed */ 
            argso: {},

            // config
            conf: {},

            // current sync, last sync, data
            current: {...DQ.get_opstate_struct()},
            last: {},
            data: {},

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

            dq_data_version: `1.0.0-$(version)`,
            dq_version: `$(DQ.version):`+Date.now(),
            dq_companion_version: ``,

            // snapshot system data
            os: {
                // snapshot of changes...
                memory:[{histogram:[]}],
                storage: [
                    // dq will do this automatically in some profile modes... otherwise you can do it from setup()
                    {identifier: '',vol:'',dev:'',path:'',sample:{speeds:[{
                        date: undefined,
                        read: undefined,
                        write: undefined
                    }]}}
                ]
            }
        } } }

        // TODO: these sub structures are the same inner config form .. and need some interface/ class
        
        static BACKUP= {
            LOCATIONS: {bundled:{
                // default is on C , your want to give a custom one for huge scale... unless its raid or some other solution
                win: 'Users/@user/AppData/Roaming/DQTOOL/path/d/backup',
                osx: '',
                unix: ''
            }}
        }
        
        static TEMP= {
            LOCATIONS: {bundled:{
                win:'',osx:'',unix:''
            }},
            d: {
                known:[],
                found: []
            },
            add() {},
            remove() {}
        }

        // TODO: better mechanism
        static MESSAGES= {
            autoLog: {
                default: 0,
                didnt: 1,
            },
            tried_file_asdir() {},
            tried_dir_asfile() {},
            didnt_complete_soon() {},
            didnt_exec_fine() {},
            didnt_instruct_outcome() {},
            didnt_select_onefile() {},
            didnt_have_access() {},
            didnt_read_file() {},
            didnt_write_file() {},
            didnt_access_temp() {},
            warn_attributes_changed() {},
            warn_owner_changed() {},
            warn_missing_companion() {},
            warn_compressing_compressed() {},
            warn_empty_resultset() {},
            fatal_incorrect_path() {},
            fatal_incorrect_volume() {},
            fatal_no_outcome() {},
            fatal_backup_location_doesnt_exist() {},
            fatal_script_is_not_valid() {}
        }

        static BEHAVIOURS= {
            // apparent ram available to machine
            // this calculation should be working set, and not the actual total as that would cause uncessary swapping
            // ie working available set... 
            get_total_mem() {},
            // give float on memory consumption
            is_mem_float() {},
            // give boolean() 
            is_low_mem() {}
        }

        //#file() {}
        
        static get_pipeline_operator= () => 
            async (prevData, nextData) => 
                await Promise.resolve()

        // TODO: this is not correct
        async #Pipeline(opFn) {
            const next= !opFn
                ? await opFn()
                : await DQ.get_pipeline_operator()({},{})
            return await Promise.resolve(next)
        }

        async #ClusteredPipeline() {
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
        #get_hash_wrapper() {
            // first call to_obj .. and coalesce data into object
            // TODO: produce blake hash ? of JSON.stringify()
            // TODO: considering the data could become massive, this is not a great solution... 
            // TODO: call hashing function return string
        }

        #get_blake3_hash(str:string):string {
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

        _get_config(data) {
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

        _Logger(log_config) {

        }

        _configure(config) {
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
        static OP_CLASSIFICATION= {state:[],resultSet:[DQ_OP.report],fs:[],external:[],data:[],analysis:[],reporting:[],stages:[],binary:[],media:[],logic:[]}

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
                // get handy example chains
                'examples':{cmd:['examples']},
                // get all operations operations fs| each organised group
                'operations':{cmd:['operations']},
                // get all op groups 
                'op_groups':{cmd:['op_groups']},
                // strictly mirror a,b
                'mirror':{cmd:['mirror']},
                // sync a,b
                'sync':{cmd:['sync']},
                // update a,b
                'update':{cmd:['update']},
                // shows all locations known to dq
                'locations':{cmd:['backup']},
            }
        }
        static #render() {}
        static #crlno() {}
        static FORMATS={
            textbin: {
                renderer(){}
            },
            // pdf: {
            //     renderer() {}
            // }
        }

        /* fail safe show */
        //  if its a file it will show the compatible contents
        // if frame set show diff
        static _showStage() {}
        static _showFrame() {}
        static _showFrameDiff() {}
        static _showFile() {}
        static _showDir() {}
        static _showTable() {}
        static repl() {}
        static validate_script() {}
        /* pass a script of internal dq into the cli */
        from_script() {}
        /* pass output to next executable / pipe */
        to_next_exec() {}
        pipe() {}
        #parse_args_array() {}
        constructor() {
            // this.#argsv= argsv
            // this.#argso= this.#parse_args_object()
        }
    }
    //#endregion dq-cli
    /*TODO: www pretty printed */
}
//#endregion dirq
