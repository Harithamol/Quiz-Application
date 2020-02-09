export interface quest {
    id: number;
    title: string;
    Options: options[];
}
export interface options{
    value:string;
    iscorrectans:boolean;
}