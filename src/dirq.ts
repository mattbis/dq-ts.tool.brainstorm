// import * as gblNodeFs from 'node:fs'
// import {assert} from 'node:assert'
namespace DirQ {
    // hmmm
    export class DQ_FORMATS {
        static ARCHIVE_FORMATS= {
            '7zip': {
                ext: '7z'
            }
        }
    }
    /*
    */
    //export type 
    //#region dq-operators
    export class DQ_OP {
        /* get the state as a CLI report */
        static report() {}

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

        copy(a,b) {
        }
        
        // this will add to operation
        checksum() {
            // exit badly ==>
            //this.d.flags.checksum_operation = 1
        }
        // protect files with parq
        //parq(){}
        __raw(){}
        // gets .. --> fileinfo
        _fileinfo(){}
        
        /* ---------------------------------------------------------------------- */

        input({keys:[],toVar,toBool}) {}
        confirm() {}
        merge(a) {
            // for a merge into runtime
        }

        index({integer,name}){
            // if name => name()
            // if integer _index()
        }

        _arr_index(ix,o){return o[ix]}
        static _array_index_zero=a=>a[0]
        
        
        // _form() {}
        // first() {}
        // mid() {}
        // samp() {}
        // last() {}
        // range() {}
        /* dir path level from current set */
        level() {}
        /* parent dir of path */
        parent() {

        }
        /* from curren set all sibling items */
        sibling() {}
        /* from current set all child path items */
        children() {}
        /* from current set all ancestor path items */
        ancestor() {}
        /* limit the result set to x num */
        limit() {}

        /* for a fs node get its path, always first item in set */
        path(){}

        // for an index the file
        file({index,name,ext}) {
            // if set is zero return
        }
        files() {}

        is_file() {}
        is_folder() {}
        is_dir() {}
        is_path() {}
        is_empty() {}
        has_files() {}

        // handy shortcut based on known formats
        is_archive() {}

        static KNOWN_ATTRIBUTES= [
            {id:'r'},{id:'a'},{id:'d'}, // all operating systems
            // linux
            // unix
            // osx
        ]
        // matching attributes
        attrib() {}

        // matching name
        name() {}

        // matching extension
        ext({name}) {}
        extension= a=>this.ext(a)
        // array of paths typically used to get paths of result set
        paths({filter}) {

        }

        // of selectino or path ... 
        // gets dir() of file() or is first dir*() or result set 0, with index is 
        dir() {}
        disk(){}
        // volume of path ( this can differ to disk in that it could be virtual of some kind )
        vol(){
           //DQ._warn_experimental() {}
        }

        //static const ui = new class DQ.GUI()
            
        exec({cmd,macro}) {}
        __lookup() {}
        __forget() {}
        /* anything passed to command can e recalled across usage */
        __remember() {}

        // set as macro current frames
        _macro({frames}) {}

        // binds a key to something
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
        warn() {}
        same() {}

        // for selection process with function
        process(fn) {}
        //update() {}
        refresh() {}

        _warn() {}
        static warn_processing() {}
        static warn_inner_processing() {}
        static warn_magnitude() {}
        static _warn_experimental() {}

        // date of set
        static DATE_SELECTORS=['da','date','dy','days','m','months','yr','years','hr','hours','m','minutes','s','seconds','u','unix']
        _time(i,j,k) {}
        from(fromDate){}
        to(toDate){}
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
        // with recursive operations
        level() {}
        flat(options,...a) {
            /* optimise algorithym - recurse levels into top most */
            
        }

        delete() {
            // if safe -- try delete
            // if safe try delete
        }

        compress() {}
        // not sure this is possible
        recycle_bin() {}

        // diff current result set to some other
        diff(from) {}

        static RENAME_RULESET=[]
        rename(rulesetArr) {}

        // send to log as user
        log() {}

        // records the current results via path
        //set() {}
        //get() {}

        // search any known id to get a fragment result search
        known({fragments}) {}

        // store for session() {} this.d as state as id or generic
        // 
        store({id,data}) {
            // if no id internal_id
        }

        // teh command stores teh last 32 things it did...

        // store result set to compare or whatever else on stack
        push() {}
        // pop the store stack() {}
        pop() {}

        // save sync frames
        save() {}
        _save_frames_sync({filters}) {}
        //  load sync frames
        load() {}
        _load_frames_sync({filters}) {}
        // get frame
        frame({index,name,profile}) {}
        // arm recording
        record({id,props}) {}
        arm({id,props}) {}
        disarm({id,props}) {}

        /* these use their own instance of recording */
        undo() {}
        redo() {}

        // for a path get users() {}
        users() {}

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
        dry_run() {}
        
        recurse() {}
        recursive() {}

        // position in chain 
        options() {}
    }
    //#endregion dq-operators
    //#region dq-ui
    export class DQ_UI {
        static _debounce() {}
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
    export class DQ {

        static version= "0.1.0.10"
        static productName= "DQ"
        static appName= "${DQ.productName}${DQ.version}"
        static versionTagName= "ALPHA"
        static subVersion=`${DQ.version}${DQ.versionTagName}${Date.now()}`

        static CMD= {
            // restore opframes
            'last': {},
            'save': {},
            'load': {},
            'profile': {}
        }
        
        static MAGIC= {
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
            users: [],
            lhash: []}}
        }

        static STORE= {
            userHome: [''],
            knownStores: []
        }

        // called to set state
        static _gbl_autosave() {}
        static _gbl_autoload() {}

        PROFILE= {
            default: {
                config: {events:{
                    init: () => {},
                    start: () => {},
                    exit: () => {}
                }},
                stopOnErrors:{
                    config: {},
                },
                //askToUpgrade:{},
                global: {
                    config: {
                        known:{
                            searchPaths:[]
                        }
                    }
                },
                local: {
                    config:{
                        magnitude:{sample:{nodeCount:[1e2,1e6,1e9]}}},
                noLimit:{
                    config:{
                        magnitude:{sample:{nodeCount:[]}}}}}
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

            // object pool
            o: {
                filters: {
                
                },
                // paths
                p: {

                }    
            },
            
            flags: {
                useStreams: !0,
                shouldStopError: !0,
                shouldSlowLowMemory: !0
            },

            dq_data_version: version,
            dq_version: `$(DQ.version):`+Date.now(),

            // snapshot system data
            os: {
                memory:[],
                storage_known_fast: []
            }
        } } }
        
        static TEMP= {
            LOCATIONS: {bundled:{
                win:'',osx:'',unix:''
            }},
            d: {
                known:[]
            },
            add() {},
            remove() {}
        }
        // TODO: better mechanism
        static OUTCOMES= {
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
            didnt_access_temp() {}
        }

        static BEHAVIOURS= {
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

        /* methods organised */
        static OP= {state:[],resultset:[DQ_OP.report],fs:[],external:[]}

        cluster() {}

        static show() {}
        static _showFile() {}
        static _showDir() {}
    }
    //#endregion dq-class
    //#region dq-cli
    export class DQ_CLI {
        static ARG_DEF_OPTIONS= {
            'verbose':{short:'v', desc:''},
            'debug':{short:'d', desc:''},
            'quiet':{short:'q', desc:''},
        }
        static ARG_DEF_OP= {
            'repeat':{short:'rp', desc: ''},
            'exec':{short:'e',desc:''}
        }
        static ARG_DEF_RESULTSET= {}
        static CMD_DEF= {
            cmd: {},
            opt: {show:!0}//by default show commands
        }
        repl() {}
        /* pass output to next executable */
        to_next_exec() {}
        #parse_args_array() {}
        constructor() {
            // this.#argsv= argsv
            // this.#argso= this.#parse_args_object()
        }
    }
    //#endregion dq-cli
    /*TODO: www pretty printed */
}
