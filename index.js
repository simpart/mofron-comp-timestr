/**
 * @file   mofron-comp-timestr/index.js
 * @brief  time string component
 * @author simpart
 */
const mf     = require('mofron');
const Horiz  = require('mofron-layout-horizon');
const TimeIF = require('mofron-comp-timeif');
const Text   = require('mofron-comp-text');

mf.comp.TimeStr = class extends TimeIF {
    
    /**
     * initialize component
     * 
     * @param p1 (object) paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('TimeStr');
            this.format(':', ':', '', null);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.layout(new Horiz());
            
            this.child([
                /* hour */
                this.hourComp(),
                this.format()[0],
                /* minute */
                this.minuteComp(),
                this.format()[1],
                /* second */
                this.secondComp(),
                this.format()[2],
                /* milli second */
                this.millisecComp(),
                this.format()[3]
            ]);
            
            /* set default string */
            this.start();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * hour setter/getter
     * default hour is current time
     *
     * @param p1 (number) hour value
     * @param p1 (undefined) call as getter
     * @return (number) hour value
     */
    hour (prm) {
        try {
            if (undefined !== prm) {
                this.hourComp().text((1 > (prm/10)) ? '0' + prm : '' + prm);
            }
            return super.hour(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * minute setter/getter
     * default minute is current time
     *
     * @param p1 (number) minute value
     * @param p1 (undefined) call as getter
     * @return (number) minute value
     */
    minute (prm) {
        try {
            if (undefined !== prm) {
                this.minuteComp().text((1 > (prm/10)) ? '0' + prm : '' + prm);
            }
            return super.minute(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * second setter/getter
     * default second is current time
     *
     * @param p1 (number) second value
     * @param p1 (undefind) call as getter
     * @return (number) second value
     */
    second (prm) {
        try {
            if (undefined !== prm) {
                this.secondComp().text((1 > (prm/10)) ? '0' + prm : '' + prm);
            }
            return super.second(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * millisecond setter/getter
     * default millisecond is current time
     *
     * @param p1 (number) millisecond value
     * @param p1 (undefined) call as getter
     * @return (number) millisecond value
     */
    millisec (prm) {
        try {
            if (undefined !== prm) {
                if ( (1 > (prm/10)) || (1 === (prm/1000)) ) {
                    this.millisecComp().text('00');
                } else if (1 > (prm/100)) {
                    this.millisecComp().text('0' + Math.floor(prm/10));
                } else {
                    this.millisecComp().text('' +  Math.floor(prm/10));
                }
            }
            return super.millisec(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * hour component setter/getter
     *
     * @note private method
     */
    hourComp (prm) {
        try { return this.innerComp('hourComp', prm, Text); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * minute component setter/getter
     *
     * @note private method
     */
    minuteComp (prm) {
        try { return this.innerComp('minuteComp', prm, Text); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * second component setter/getter
     *
     * @note private method
     */
    secondComp (prm) {
        try { return this.innerComp('secondComp', prm, Text); } catch (e) {
	    console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * millisocond component setter/getter
     *
     * @note private method
     */
    millisecComp (prm) {
        try { return this.innerComp('millisecComp', prm, Text); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * time format setter/getter
     * diaable target section if it setted null
     *
     * @param p1 (string) hour format
     * @param p2 (string) minute format
     * @param p3 (string) second format
     * @param p4 (string) millisecond format
     */
    format (h, m, s, ms) {
        try {
            if ( (undefined === h) &&
                 (undefined === m) &&
                 (undefined === s) &&
	         (undefined === ms) ) {
	        /* getter */
                return this.m_format;
	    }
            /* setter */
            if (undefined === this.m_format) {
                this.m_format = [
                    new Text(),  /* hour */
                    new Text(),  /* minute */
                    new Text(),  /* second */
                    new Text()   /* millisocond */
                ];
            }
            /* hour format */
            if ('string' === typeof h) {
                this.m_format[0].text(h);
	    } else if (null === h) {
                this.m_format[0].visible(false);
                this.hourComp().visible(false);
            }
            /* minute format */
            if ('string' === typeof m) {
                this.m_format[1].text(m);
            } else if (null === m) {
                this.m_format[1].visible(false);
                this.minuteComp().visible(false);
            }
            /* second format */
            if ('string' === typeof s) {
                this.m_format[2].text(s);
            } else if (null === s) {
                this.m_format[2].visible(false);
                this.secondComp().visible(false);
            }
            /* millisecond format */
            if ('string' === typeof ms) {
                this.m_format[3].text(ms);
            } else if (null === ms) {
                this.m_format[3].visible(false);
                this.millisecComp().visible(false);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text size setter/getter
     *
     * @param p1 (string) text size (css value)
     * @param p1 (Size) text size (Size object)
     * @param p1 (undefined) call as getter
     * @return (string) text size (css value)
     */
    size (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.hourComp().size();
            }
            /* setter */
            let chd = this.child();
            for (let cidx in chd) {
                if (true === mf.func.isInclude(chd[cidx], 'Text')) {
                    chd[cidx].size(prm);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;    
        }
    }
    
    /**
     * text space setter/getter
     * 
     * @param p1 (string) space size (css value)
     * @param p1 (Size) space size (Size object)
     * @param p1 (undefined) call as getter
     * @return (string) space size (css value)
     */
    space (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.hourComp().sizeValue('margin-left');
            }
            /* setter */
            let chd = this.child();
            for (let cidx in chd) {
                if (true === mf.func.isInclude(chd[cidx], 'Text')) {
                    chd[cidx].sizeValue('margin-left', prm);
                }
            }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TimeStr;
/* end of file */
