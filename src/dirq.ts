// import * as gblNodeFs from 'node:fs'
// import {assert} from 'node:assert'
namespace DirQ {
    /*
    */
    //export type 
    //#region dq-class
    /*
    */
    export class DQ {

        static MAGIC= {
            virtual_providers: {
            }
        }

        static PATH= {
            disk: '',
            p: '',
            v: '',
            now: '',
            kprops: [],
            users: [],
            lhash: []
        }

        PROFILE= {
            stopOnErrors:{

            },
            global: {
                searchPaths:[]
            },
            local: {magnitude:{sample:{nodeCount:[1e2,1e6,1e9]}},
            noLimit:{magnitude:{sample:{nodeCount:[]}}}}
        }

        //$fs= gblNodeFs

        #hash() {}

        // data
        d= DQ.get_data_struct()

        static version= "0.1.0.10"

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
            frames: [DQ.get_opframe_struct()]
        }}

        /* get empty result structure */
        static get_result_struct() {}
        static get_opframe_struct() {}

        static get_repl() {}

        static set_last_state() {}
        static get_last_state() {}

        /* reset and created */
        static get_data_struct() { return {
            argsv: [], 
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
                shouldStopError: !0
            },

            // version: of main store
            version: `$(DQ.version):`+Date.now()
        } }

        static OUTCOMES= {
            autoLog: {
                default: 0,
                didnt: 1,
            },
            tried_file_asdir() {},
            tried_dir_asfile() {},

            didnt_exec_fine() {},
            didnt_instruct_outcome() {},
            didnt_select_onefile() {},
            didnt_have_access() {},
            didnt_read_file() {},
            didnt_write_file() {}
        }

        //#file() {}
        
        static get_pipeline_operator= () => 
            async (prevData, nextData) => 
                await Promise.resolve((nextData = prevData, nextData))

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

        constructor(d) {
            // this.index(works)
            this.d = d && Object.assign({}, d) || DQ.get_data_struct()
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

        static _AbstractOp() {}
        static _PROCESSOR_ARGS= []

        static InputOp() {}
        static DirOp() {}
        static FileOp() {}
        static FlattenOp() {}
        static SetOp() {}
        static PropOp() {}
        static DiffOp() {}
        static ReportOp() {}

        /* methods organised */
        static OP= {state:[],resultset:[DQ.report],fs:[],external:[]}

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

        // internal state management
        /* clone a -> b in this.d.
        When you set an external hash you will be using this.. for example
        */
        copy(a,b) {

        }
        
        // this will add to operation
        checksum() {
            //this.d.flags.checksum_operation = 1
        }
        // protect files with parq
        //parq(){}
        __raw(){}
        // gets .. --> fileinfo
        _fileinfo(){}
        
        /* ---------------------------------------------------------------------- */

        input({keys:[]}) {}

        /* collection selectors 0 this would rely on a getter setting chain */
        _index(ix){return this[ix]}
        // _form() {}
        // first() {}
        // mid() {}
        // samp() {}
        // last() {}
        // range() {}
        /* dir path level from current set */
        level() {}
        /* from current set all child path items */
        children() {}
        /* from current set all ancestor path items */
        ancestor() {}

        /* for a fs node get its path, always first item in set */
        path(){}

        // file
        file({index,name,ext}) {
            // if set is zero return
        }

        // matching attributes
        attrib(knownAttributes=[
            'r','a','d', // all operating systems
            // linux
            // unix
            // osx
        ]) {}

        // matching name
        name() {}

        // matching extension
        ext({name}) {}
        // array of paths typically used to get paths of result set
        paths({filter}) {

        }

        // directory of path
        dir() {}
        // disk of a path
        disk(){}
        // volume of path ( this can differ to disk in that it could be virtual of some kind )

        exec({cmd,macro}) {}
        __lookup() {}
        /* anything passed to command can e recalled across usage */
        __remember() {}
        _cmd(){}
        // set as macro current frames
        _macro({frames}) {}

        _key() {}

        bind(path, opFrames) {}

        static PROPS=['name','attribute','path','date','user','count']
        // result set
        filter({props,date}) {}
        index() {}

        // set tests
        warn() {}
        same() {}

        process() {}
        //update() {}
        refresh() {}

        _warn() {}
        #warn_processing() {}
        #warn_inner_processing() {}
        #warn_magnitude() {}

        // date of set
        static DATE_SELECTORS=['date','days','months','years','hours','minutes','seconds','unix']
        _time(i,j,k) {}
        from(fromDate){}
        to(toDate){}
        stat(path){}
        // use prop.count to ... 
        recent({date,days,months,years,hours,minutes,seconds,unix},{...prop}) {}
        old({date,days,months,years,hours,minutes,seconds,unix}) {}

        // change set
        move(a, b) {return DQ.move_path(a, b)}
        static move_path(a, b) {}

        /* 
        flatten [dirs] for current path
            for i levels flatten dirs - if files clash ... erm 
        */
        _flatten_dir(options,...a) {}
        flat(options,...a) {
            /* optimise algorithym - recurse levels into top most */
            
        }

        _safe_delete() {}
        _delete() {}
        delete() {
            // try safe
            // try delete
        }

        compress() {}
        diff(from) {}
        static RENAME_RULESET=[]
        rename(rulesetArr) {}

        log() {}

        // records the current results via path
        //set() {}
        //get() {}

        save() {}
        load() {}
    }
    //#endregion dq-class
    //#region dq-cli
    export class DQ_CLI {
        static ARG_DEF_OPTIONS= {
            'verbose':{short:'v', desc:''},
            'debug':{short:'d', desc:''},
            'quiet':{short:'q', desc:''},
        }
        static ARG_DEF_OP= {}
        static ARG_DEF_RESULTSET= {}
        static CMD= {
            // restore opframes
            'last': {}
        }
        static CMD_DEF= {
            cmd: {

            }
        }
        #parse_args_array() {}
        constructor() {
            // this.#argsv= argsv
            // this.#argso= this.#parse_args_object()
        }
    }
    //#endregion dq-cli
    /*TODO: www pretty printed */
}
