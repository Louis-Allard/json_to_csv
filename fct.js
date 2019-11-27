 function DownloadJSON2CSV(objArray)
    {
        let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (let index in array[i]) {
                line += array[i][index] + ',';
            }
            line.slice(0,line.Length-1); 
            str += line + '\r\n';
        }
        window.open( "data:text/csv;charset=utf-8," + escape(str))
    }
