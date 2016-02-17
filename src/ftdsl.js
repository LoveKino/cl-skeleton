/**
 * file tree DSL
 *
 * file node: 
 *      directory
 *      file
 *      link
 */

let dir = (name, fileList=[]) => {
    if(typeof name !== 'string') {
        throw new TypeError('Expect string for dir name. but got ' + name);
    }

    if(!isArray(fileList)) {
        throw new TypeError('Expect array for file list. but got ' + fileList);
    }

    return {
        type: 'dir',
        fileList
    };
};

let file = (name, content='', encode='utf8') => {
    if(typeof name !== 'string') {
        throw new TypeError('Expect string for file name. but got ' + name);
    }
    if(typeof encode !== 'string') {
        throw new TypeError('Expect string for encode type. but got ' + encode);
    }
    return {
        type: 'file',
        content,
        encode
    }
};

let isArray = v => v && typeof v === 'object' && typeof v.length === 'number';

module.exports = {
    dir,
    file
};
