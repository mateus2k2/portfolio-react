import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Row, Col, Select, DatePicker, Input, ConfigProvider, Collapse } from "antd";
import { LanguageContext } from './../LanguageContext';

import localeEN from 'antd/locale/en_US';
import localePT from 'antd/locale/pt_BR';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';

const { Option } = Select;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

function SearchForm({ onSearch, allTags, allAuthors }) {
  const { language } = useContext(LanguageContext);
  let locale = null;

  if (language === 'EN') {
    dayjs.locale('en');
    locale = localeEN;
  }
  if (language === 'PT') {
    dayjs.locale('pt-br');
    locale = localePT;
  }

  const [filters, setFilters] = useState({
    tags: [],
    creation: [],
    title: "",
    author: ""
  });

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
    }));
  }, [allTags]);

  const handleChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleTagsChange = (selectedTags) => {
    setFilters({
      ...filters,
      tags: selectedTags
    });
  };

  const handleDateRangeChange = (dates, dateStrings) => {
    handleChange("creation", dateStrings);
  };

  const handleSubmit = (e) => {
    onSearch(filters);
  };

  return (
    <div className="search-form-container-div">
      <Collapse>
        <Panel header={language === 'EN' ? "Search" : "Busca"} key="1" className="search-form-container">
          <Form layout="vertical" onFinish={handleSubmit}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={language === 'EN' ? "Tags" : "Tags"}>
                  <Select
                    mode="multiple"
                    value={filters.tags}
                    onChange={handleTagsChange}
                  >
                    {allTags.map((tag, index) => (
                      <Option key={index} value={tag}>
                        {tag}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={language === 'EN' ? "Date" : "Data"}>
                  <ConfigProvider locale={locale}>
                    <RangePicker
                      onChange={handleDateRangeChange}
                    />
                  </ConfigProvider>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={language === 'EN' ? "Title" : "Titulo"}>
                  <Input
                    value={filters.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={language === 'EN' ? "Author" : "Autor"}>
                  <Input
                    value={filters.author}
                    onChange={(e) => handleChange("author", e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {language === 'EN' ? "Search" : "Buscar"}
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
}

export default SearchForm;
