import { Typography, Table, Input } from "antd";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const columns = [
    {
      title: "Name",
      //   width: 150,
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      //   width: 150,
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      //   width: 100,
      dataIndex: "phone",
      key: "phone",
    },
  ];

  const onSearch = (e) => {
    console.log(e.target.value);
  };

  const onRowClick = (record) => {
    return {
      onClick: () => {
        console.log("row clicked", record);
        history.push(`/details/${record.key + 1}`);
      },
    };
  };

  return (
    <div className="main-home">
      <div className="general-header">
        <Typography.Title level={2}>User Dashboard</Typography.Title>
      </div>
      <div className="content">
        <Typography.Title level={3}>All Available Users</Typography.Title>
        <Input
          placeholder="Search for a User..."
          onChange={(e) => onSearch(e)}
          allowClear
          className="search-bar"
        />
        <Table
          columns={columns}
          className="user-table"
          onRow={onRowClick}
          // loading={allCustomers && allCustomers.length > 0 ? false : true}
          dataSource={[...Array.from({ length: 100 }, (v, i) => i)].map(
            (i) => ({
              key: i,
              name: "Khizram Saeed",
              email: "khizramsaeed02@gmail.com",
              phone: i + 1,
            })
          )}
          pagination={{
            position: ["bottomCenter"],
            pageSizeOptions: ["50", "100", "150", "200"],
            showSizeChanger: true,
            defaultPageSize: 20,
          }}
          scroll={{ x: 600 }}
          sticky
        />
      </div>
    </div>
  );
};

export default Home;
