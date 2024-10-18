import React, { useEffect, useState } from 'react';
import CustomTable from './Table';
import axios from 'axios';

const Holidays = () => {
  const [holidays, setHolidays] = useState([]);

  // Function to fetch holidays from API
  const fetchHolidays = () => {
    axios.get('http://localhost:8000/api/v1/holidays')
      .then((response) => {
        setHolidays(response.data);
      })
      .catch((err) => {
        console.log('Error while fetching holidays:', err);
      });
  };

  // Initial data fetching when the component mounts
  useEffect(() => {
    fetchHolidays();
  }, []);

  // Handle the edit action for a holiday
  const handleEdit = (holiday) => {
    const updatedName = prompt('Edit holiday name:', holiday.holidayName);
    const updatedLocation = prompt('Edit location:', holiday.location);
    const updatedShift = prompt('Edit shift:', holiday.shift);
    const updatedDetails = prompt('Edit details:', holiday.details);

    if (updatedName && updatedLocation && updatedShift && updatedDetails) {
      axios.put(`http://localhost:8000/api/v1/holidays/${holiday.id}`, {
        holidayName: updatedName,
        location: updatedLocation,
        shift: updatedShift,
        details: updatedDetails,
      })
        .then(() => {
          // Refetch holidays after edit
          fetchHolidays();
        })
        .catch((err) => {
          console.log('Error while updating the holiday:', err);
        });
    }
  };

  // Handle the delete action for a holiday
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this holiday?')) {
      axios.delete(`http://localhost:8000/api/v1/holidays/${id}`)
        .then(() => {
          // Refetch holidays after delete
          fetchHolidays();
        })
        .catch((err) => {
          console.log('Error while deleting the holiday:', err);
        });
    }
  };

  // Handle the add action for a new holiday
  const handleAdd = () => {
    const newName = prompt('Enter holiday name:');
    const newLocation = prompt('Enter location:');
    const newShift = prompt('Enter shift:');
    const newDetails = prompt('Enter details:');

    if (newName && newLocation && newShift && newDetails) {
      axios.post('http://localhost:8000/api/v1/holidays', {
        holidayName: newName,
        location: newLocation,
        shift: newShift,
        details: newDetails,
      })
        .then(() => {
          // Refetch holidays after adding a new holiday
          fetchHolidays();
        })
        .catch((err) => {
          console.log('Error while adding a new holiday:', err);
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-lg font-bold mb-4">Holidays Table</h2>
      <CustomTable
        columns={[
          { header: 'Holiday no.', accessor: 'id' },
          { header: 'Holiday Name', accessor: 'holidayName' },
          { header: 'Location', accessor: 'location' },
          { header: 'Shift', accessor: 'shift' },
          { header: 'Details', accessor: 'details' },
        ]}
        data={holidays}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default Holidays;
