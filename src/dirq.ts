import * as gblNodeFs from 'node:fs'
namespace DirQ {
    /*
    */
    //export type 
    /*
    */
    export class DQ {
        _fs= gblNodeFs

        #hash() {}

        // data
        d= DQ.get_data_struct()

        static to_obj() {
            // .reduce()
            DQ.each(k => {
                //e => typeof e === "object" ? e : DQ.to_obj(e) 
            })
        }

        static to_arr(args) {
            if(!Array.isArray(args)) {args=[args]}
            return args
        }

        static to_csv() {}
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
            filters: {}
        } }

        /* get empty result structure */
        static get_result_struct() {
        }

        //#file() {}

        /* TODO: turn some result set into a stream where possible - in some 
        operations like in Node Core, this has no real benefit */
        //stream() {}
        
        static get_pipeline_operator= () => 
            (prevData, nextData) => (nextData = prevData, nextData)

        // TODO: this is not correct
        async #Pipeline(opFn) {
            const next= !opFn
                ? await opFn()
                : DQ.get_pipeline_operator()({},{})
            return await Promise.resolve()
        }

        I(...a) {return a}

        // get and setters, species, slots test for speed for now:-
        g(kc, id) {return this[kc][id]}
        s(kc, id, v) {return this[kc][id]=v}

        // for a result set you can force an external hash reference
        get_hash_value= (id) => this.g('hash', id)
        set_hash_value= (id, v) => this.s('hash', id, v)

        /* returns the current hashing used for data values */
        #get_hash_wrapper() {
            // first call to_obj .. and coalesce data into object
            // TODO: produce blake hash ? of JSON.stringify()
            // TODO: considering the data could become massive, this is not a great solution... 
        }
        #get_blake3_hash(str:string):string {
            const blake3HashStr=""
            return blake3HashStr
        }

        constructor(d) {
            this.d = Object.assign({}, d) || DQ.get_data_struct()
        }

        get(){return this}

        /* TODO: best method to clone internal data, and restore state */
        clone(){return new DQ(this)}

        set_data= (kc="data", id, v) => this.s(kc, id, v)
        get_data() {}

        set_flag() {}
        get_flag() {}

        set_filter() {}
        get_filter() {}

        set_property() {}
        get_property() {}

        // internal state management
        /* clone a -> b in this.d.
        When you set an external hash you will be using this.. for example
        */
        copy() {}
        
        /* ---------------------------------------------------------------------- */
        /* collection selectors */
        first() {}
        middle() {}
        last() {}
        range() {}

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

        // result set
        filter() {}
        index() {}

        // date of set
        recent({days,months,hours,minutes,seconds,unix}) {}

        // change set
        move(a, b) {return DQ.move_path(a, b)}
        static move_path(a, b) {}

        /* 
        flatten [dirs] for current path
            for i levels flatten dirs - if files clash ... erm 
        */
        flattenPath({levels}) {
            /* recurse levels into top most */
        }
    }

    export class DQ_CLI {
        static ARG_DEF= {
            'verbose':{},
            'debug':{},
            // inversely proportional....
            'quiet':{},

            // force hash for result set
            'sethash': {}
        }
        #parse_args_array() {}
        constructor() {
            // this.#argsv= argsv
            // this.#argso= this.#parse_args_object()
        }
    }

    /*TODO: www pretty printed */

}
