enum sortingorderEnum { 'Asc', 'Desc' }

var itemsPerPageJSON = { "5": "5", "10": "10", "20": "20" }

enum include_actionsEnum { "Edit", "Delete", "Enable", "Disable", "View" }

enum inputTypeEnum { "String", "Component", "Html" }

type sortingorderType = keyof typeof sortingorderEnum;
type itemsPerPageType = keyof typeof itemsPerPageJSON;
type include_actionsType = keyof typeof include_actionsEnum;
type inputType = keyof typeof inputTypeEnum;


export interface tableConfig {

     /**
     * The settings required to set the action column in the table
     * @type {actionSetting}
     */
     actionSetting: actionSetting;

     sortBycolumn?: string;
     /**
      * Optional
      * @type {sortingorderType} 
      * Sets the default sorting option. Default Value is "Asc"
      */
     sortingorder?: sortingorderType;
     /**
      * Optional
      * @type {itemsPerPageType} 
      * * To set items per page. The defaut value is 10.
      */
     itemsPerPage?: itemsPerPageType;
     /**
      * Optional
      * To set the data required to populate the table.
      *  @type {Array<any>}
      * This is the variable that holds the data from the imported json file.
      */
     tableData: Array<any>;
     /**
      * Configuration for setting the columns in the table
      *  @type {Array<columnData>}
      */
     columns: Array<columnData>;
     /**
      * This displayes all the rows in the table without splitting it and removes pagination.
      * @type {boolean}
      */
     displayAll?: boolean;
     /**
      * Boolean value that displayes the table based on backend search. Default Value is false.
      * @type {boolean}
      */
     backendSearch?: boolean;
     /**
      * Optional
      * @type {number}
      * Tho set the total number of records in the backend
      */
     totalRecordsInBackend?: number;

}

export interface columnData {


     /**
      * To display the name of the column Table
      * @type {string}
      */
     title: string;
     /**
      * Boolean Value to sort columns in particular 
      * @type {boolean}
      * */
     sort: boolean;
     /**
      * The json key value to populate the table column
      * @type {string} 
      * */
     columnObj: string;
     /**
      * Boolean Value to enable/diable search in particular columns.
      * @type {boolean}
      */
     filterString: boolean;
     /**
      * Optional
      * @type {string}
      * Set width of each column in the table 
      * */
     width?: string;
     /**
      * Optional
      * @type {inputType}
      * defines the type of input for each column. 
      * */
     inputType?: inputType;

}

export interface actionSetting {


     /**
      * Boolean Value to show/hide the action column
      * @type {boolean}
      */
     showActionColumn: boolean;
     /**
      * Optional
      * @type {Array}
      * Array value that includes the type of actions like View, Edit, Delete required for the table.
      */
     include_actions?: Array<include_actionsType>;
     /**
      * Optional
      * @type {string}
      * To set the width of Action Column
      */
     width?: string;

}
