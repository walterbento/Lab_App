import React, { useEffect, useState } from 'react';
import { initialData } from '../../helpers/data';


export const TableItem = () => {

    const [data, setData] = useState([]);
    const [showTotals, setShowTotals] = useState(false);

    useEffect(()=> {
        setData(initialData);
    }, []);

    const handleInputChange = (value, rowIndex, columnName) => {
        setShowTotals(false);
        const newData = [...data];
        newData[rowIndex][columnName] = parseInt(value) || 0;
        setData(newData);
    };


    const handleUpdateClick = () => {
        setShowTotals(true);
    };

    return (
        <>
        
        <div className='container mx-auto mt-10 '>
        <div className=' w-[60rem] mx-auto'>
        <h1 className='text-2xl font-bold mb-6 text-left '>Lab College</h1>
        <table className=''>
            <thead className=' bg-gray-400  '>
                <tr className='' >
                    <th className=' text-left font-semibold py-3 pl-6 '>Designação</th>
                    <th className=' text-left font-semibold py-2 '>Funcionais</th>
                    <th className=' text-left font-semibold py-2 '>Não Funcionais</th>
                    <th className=' text-left font-semibold py-2 pr-12'>Número Total</th>
                </tr>
            </thead>
            <tbody className=' bg-gray-100 '>
                {data.map((row, index) => (
                    <tr className=' border-b ' key={index}>
                        <td className=' w-[500px] py-3 pl-6 ' >{row.designation}</td>
                        <td className=' w-[100px] ' >
                            <input
                                disabled={index==0}
                                min={0}
                                type="number"
                                value={row.funcionais}
                                onChange={e => handleInputChange(e.target.value, index, 'funcionais')}
                                className="w-16 px-2 py-1 border rounded-sm text-sm"
                            />
                        </td>
                        <td className=' w-[150px] ' >
                            <input
                                disabled={index==0}
                                min={0}
                                type="number"
                                value={row.naoFuncionais}
                                onChange={e => handleInputChange(e.target.value, index, 'naoFuncionais')}
                                className="w-16 px-2 py-1 border text-sm rounded-sm"
                            />
                        </td>
                        <td className=''><input disabled={index!==0} className='w-16 border rounded-sm'  type="text" value={showTotals ? row.funcionais + row.naoFuncionais : row.showTotals} /></td>
                    </tr>
                ))}
                
            </tbody>
        </table>

        <div className=' my-5 ' >
                <button className=' bg-blue-500 py-2 px-10 rounded-sm text-white float-end mr-16 mb-10 ' onClick={handleUpdateClick}>Actualizar</button>
        </div>
        </div>
        </div>
        
        </>
    );
};

