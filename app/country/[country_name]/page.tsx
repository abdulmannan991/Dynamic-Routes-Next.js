export default function Country({ params }: { params: { country_name: string } }) {
    const countryDetails: { [key: string]: { population: string; capital: string; color: string } } = {
        pakistan: { population: "231 million", capital: "Islamabad", color: "bg-green-600" }, 
        india: { population: "1.42 billion", capital: "New Delhi", color: "bg-orange-500" }, 
        russia: { population: "146 million", capital: "Moscow", color: "bg-blue-600" }, 
        china: { population: "1.4 billion", capital: "Beijing", color: "bg-red-600" }, 
        japan: { population: "126 million", capital: "Tokyo", color: "bg-red-500" }, 
    };

    const countryInfo = countryDetails[params.country_name.toLowerCase()];

    if (!countryInfo) {
        return <div>Country not found!</div>;
    }

    return (
        <div className={`${countryInfo.color} text-white p-4 text-center p-12 mt-6 max-w-7xl mx-auto p-4 sm:p-6 md:p-8`}>
            <h1>Country Name: {params.country_name}</h1>
            <p>Population: {countryInfo.population}</p>
            <p>Capital City: {countryInfo.capital}</p>
        </div>
    );
}
