import * as gblNodeFs from 'node:fs'
import {assert} from 'node:assert'
namespace DirQ {
    /*
    */
    //export type 
    //#region dq-class
    /*
    */
    export class DQ {
        _fs= gblNodeFs

        #hash() {}

        // data
        d= DQ.get_data_struct()

        static version= "0.0s"

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
            assert(DQ.is_object(a))
        }
        static to_json() {}

        static each(...a) {return DQ.eachSync(a)}
        static eachSync(fn, ...args){
            args= DQ.to_arr(args)
            const isMoreThanOne= (args.length > 1)
            let ix= 0
            let key= args[0]
            let arr= args
            let result= isMoreThanOne
                ? args.forEach((key,ix,arr) => fn(key,ix,arr))
                : fn(key,ix,arr)
            return result
        }

        /* reset and created */
        static get_data_struct() { return {
            argsv: [], 
            /* parsed */ 
            argso: {},

            // current
            c: {},
            // object
            o: {},
            
            flags: {},

            // hash store
            filters: {},

            // version: of main store
            v: `$(DQ.version)`+Date.now()
        } }

        /* get empty result structure */
        static get_result_struct() {
        }

        //#file() {}

        /* TODO: turn some result set into a stream where possible - in some 
        operations like in Node Core, this has no real benefit */
        //stream() {}
        
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

        I(...a) {return a}

        // get and setters, species, slots test for speed for now:-
        g(kc, id) {return this[kc][id]}
        s(kc, id, v) {return this[kc][id]=v}

        // for a result set you can force an external hash reference
        get_hash_value= id => this.g('hash', id)
        set_hash_value= (id, v) => this.s('hash', id, v)

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
            this.d = Object.assign({}, d) || DQ.get_data_struct()
            this._configure(this._get_config(this.d))
        }

        get(){return this}

        /* TODO: best method to clone internal data, and restore state */
        clone(){return new DQ(this)}

        _get_config(data) {
            return {
                version: `${DQ.version}`,
                subver: `${Date.now()}${data??.subver}`,
                inject: {
                    methods:[
                        "data", "flag", "filter", "property"
                    ]
                }
            }
        }

        _log(log_config) {

        }

        _configure(config) {
            // if in config 
            for (const i of config.inject.methods) {
                DQ[`set_${i}(id,v)`]=(kc=i, id, v) => {
                    this.s(kc, id, v)
                }                
                DQ[`get_${i}(id)`]=(kc=i, id) => {
                    this.g(kc,id)
                }
            }
        }

        set_data(id,v) {}
        get_data(id) {}

        set_flag(id,v) {}
        get_flag(id) {}

        set_filter(id,v) {}
        get_filter(id) {}

        set_property(id,v) {}
        get_property(id) {}

        // internal state management
        /* clone a -> b in this.d.
        When you set an external hash you will be using this.. for example
        */
        copy(a,b) {

        }
        
        /* ---------------------------------------------------------------------- */
        /* collection selectors */
        // _form() {}
        // first() {}
        // mid() {}
        // samp() {}
        // last() {}
        // range() {}

        // file
        file({index,name,ext}) {}

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

        // directory of file
        dir({index,name}) {}

        exec({cmd,macro}) {}
        _cmd(){}
        _macro() {}

        // result set
        filter() {}
        index() {}

        // date of set
        static DATE_SELECTORS=['days','months','years','hours','minutes','seconds','unix']
        recent({days,months,years,hours,minutes,seconds,unix}) {}
        old({days,months,years,hours,minutes,seconds,unix}) {}

        // change set
        move(a, b) {return DQ.move_path(a, b)}
        static move_path(a, b) {}

        /* 
        flatten [dirs] for current path
            for i levels flatten dirs - if files clash ... erm 
        */
        _flattenDir() {}
        flat({levels}) {
            /* optimise algorithym - recurse levels into top most */
            
        }
    }
    //#endregion dq-class
    //#region dq-cli
    export class DQ_CLI {
        static ARG_DEF= {
            'verbose':{short:'v', desc:''},
            'debug':{short:'d', desc:''},
            'quiet':{short:'q', desc:''},
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
