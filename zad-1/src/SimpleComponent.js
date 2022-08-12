import React, { useState, useEffect } from "react";

/* Note: I added an import afterwards.
  You can find the original solution in SimpleComponentFunction
*/

function SimpleComponent(props) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();

            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [data]);


    return (
        <div>
            {isLoading ? <span>Loading</span> : data ? <span>{JSON.stringify(data)}</span> : <span>Nothing</span>}
        </div>
    );
};

export default SimpleComponent;
